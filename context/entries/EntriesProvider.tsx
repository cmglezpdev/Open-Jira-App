import { FC, ReactNode, useReducer } from "react";
import { v4 as uuid } from 'uuid';

import { entriesReducer, EntriesContext } from "./";
import { Entry, EntryStatus } from '../../interfaces';


export interface EntriesState {
    entries: Entry[];
}

const initialState:EntriesState = {
    entries: [
        {
            _id: uuid(),
            description: 'Pennnding: Esta es la description de la primera entrada',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuid(),
            description: 'InProgress: Esta es la description de la segunda entrada',
            status: 'in-progress',
            createAt: Date.now() - 223634,
        },
        {
            _id: uuid(),
            description: 'Finished: Esta es la description de la tercera entrada',
            status: 'finished',
            createAt: Date.now() - 2025246,
        },
    ],
}

export const EntriesProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(entriesReducer, initialState);

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuid(),
            description,
            status: 'pending',
            createAt: Date.now(),   
        }

        dispatch({
            type: '[Entry] AddEntry',
            payload: newEntry
        });
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({type: '[Entry] Update Entry', payload: entry});
    }

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