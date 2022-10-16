import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
    entries: Entry[];

    // Methods
    addNewEntry: (description:string) => void;
    updateEntry: (entry: Entry, showSnackbar?:boolean) => void;
    deleteEntry: (id:number | string) => void;
}

export const EntriesContext = createContext<ContextProps>({} as ContextProps);