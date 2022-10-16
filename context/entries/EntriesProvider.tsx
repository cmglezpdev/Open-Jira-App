import { FC, ReactNode, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { entriesReducer, EntriesContext } from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';

export interface EntriesState {
    entries: Entry[];
}

const initialState:EntriesState = {
    entries: [],
}

export const EntriesProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(entriesReducer, initialState);
    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async ( description: string ) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description })
        dispatch({ type: '[Entry] AddEntry', payload: data });
    }

    const updateEntry = async ( entry: Entry, showSnackbar:boolean = false ) => {
        try {
            const updEntry = { description: entry.description, status: entry.status };
            const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, updEntry)
            dispatch({type: '[Entry] Update Entry', payload: data});
            
            if ( showSnackbar )
                enqueueSnackbar('Entry Updated', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
        } catch (error) {
            console.error(error);
        } 
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({type: '[Entry] Refresh Data', payload: data});
    }

    const deleteEntry = async (id: number | string) => {
        
        try {
            const { data } = await entriesApi.delete<Entry>(`/entries/${id}`);
            dispatch({type: '[Entry] Delete Data', payload: data});

            enqueueSnackbar('Entry Deleted', {
                variant: 'success',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        refreshEntries();
    }, [])

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
            deleteEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}