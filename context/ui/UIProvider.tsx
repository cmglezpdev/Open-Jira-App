import { FC, ReactNode, useReducer } from "react";
import { uiReducer, UIContext } from './';

export interface uiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}

const initialState: uiState = {
    sideMenuOpen: false,
    isAddingEntry: false,
}

export const UIProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(uiReducer, initialState);
    
    const openSideMenu = () => dispatch({ type: '[ui] Open Sidebar' });
    const closeSideMenu = () => dispatch({ type: '[ui] Close Sidebar' });
    const setIsAddingEntry = (state:boolean) => dispatch({type: '[ui] Is Adding Entry', payload: state})

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry
        }}>
            {children}
        </UIContext.Provider>
    )
}