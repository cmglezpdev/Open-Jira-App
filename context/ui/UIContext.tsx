import { createContext } from "react";

interface UIContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;

    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (state:boolean) => void;
}


export const UIContext = createContext<UIContextProps>({} as UIContextProps);