import { createContext } from "react";
import { Entry, EntryStatus } from "../../interfaces";

interface ContextProps {
    entries: Entry[];

    // Methods
    addNewEntry: (description:string, type:EntryStatus) => void;
}

export const EntriesContext = createContext<ContextProps>({} as ContextProps);