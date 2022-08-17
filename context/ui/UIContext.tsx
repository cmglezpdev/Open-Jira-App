import { createContext } from "react";

interface UIContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggingEntry: boolean;

    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (state:boolean) => void;
    setIsDragging: ( isDragging: boolean ) => void;
}


export const UIContext = createContext<UIContextProps>({} as UIContextProps);