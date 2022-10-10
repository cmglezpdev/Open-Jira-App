import { FC, ReactNode, useEffect, useReducer } from "react";
import { v4 as uuid } from 'uuid';

import { entriesReducer, EntriesContext } from "./";
import { Entry } from '../../interfaces';
import { entriesApi } from "../../apis";

export interface EntriesState {
    entries: Entry[];
}

const initialState:EntriesState = {
    entries: [],
}

export const EntriesProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(entriesReducer, initialState);

    const addNewEntry = async ( description: string ) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description })
        dispatch({ type: '[Entry] AddEntry', payload: data });
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({type: '[Entry] Update Entry', payload: entry});
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({type: '[Entry] Refresh Data', payload: data});
    }

    useEffect(() => {
        refreshEntries();
    }, [])

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}