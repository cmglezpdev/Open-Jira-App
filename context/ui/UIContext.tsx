import { createContext } from "react";

interface UIContextProps {
    sideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}


export const UIContext = createContext<UIContextProps>({} as UIContextProps);