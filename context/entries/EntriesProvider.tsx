import { FC, ReactNode, useReducer } from "react";
import { v4 as uuid } from 'uuid';

import { entriesReducer, EntriesContext } from "./";
import { Entry } from '../../interfaces';


export interface EntriesState {
    entries: Entry[];
}

const initialState: EntriesState = {
    entries: [
        {
            _id: uuid(),
            description: 'Esta es la description de la primera entrada',
            status: 'pendding',
            createAt: Date.now(),
        },
        {
            _id: uuid(),
            description: 'Esta es la description de la segunda entrada',
            status: 'in-progress',
            createAt: Date.now() - 223634,
        },
        {
            _id: uuid(),
            description: 'Esta es la description de la tercera entrada',
            status: 'finished',
            createAt: Date.now() - 2025246,
        },
    ],
}

export const EntriesProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(entriesReducer, initialState);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}