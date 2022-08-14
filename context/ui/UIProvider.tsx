import { FC, ReactNode, useReducer } from "react";
import { uiReducer, UIContext } from './';

export interface uiState {
    sideMenuOpen: boolean;
}

const initialState: uiState = {
    sideMenuOpen: false,
}

export const UIProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(uiReducer, initialState);
    const openSideMenu = () => dispatch({ type: '[ui] Open Sidebar' });
    const closeSideMenu = () => dispatch({ type: '[ui] Close Sidebar' });

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}