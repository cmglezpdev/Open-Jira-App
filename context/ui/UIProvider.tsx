import { FC, ReactNode, useReducer } from "react";
import { uiReducer, UIContext } from './';

export interface uiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggingEntry: boolean;
}

const initialState: uiState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDraggingEntry: false
}

export const UIProvider: FC<{ children: ReactNode}> = ({ children }) => {
   
    const [state, dispatch] = useReducer(uiReducer, initialState);
    
    const openSideMenu = () => dispatch({ type: '[ui] Open Sidebar' });
    const closeSideMenu = () => dispatch({ type: '[ui] Close Sidebar' });
    const setIsAddingEntry = (state:boolean) => dispatch({type: '[ui] Is Adding Entry', payload: state})
    const setIsDragging = ( isDragging: boolean ) => dispatch({type: '[ui] Is Dragging Entry', payload: isDragging})

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            setIsDragging,
        }}>
            {children}
        </UIContext.Provider>
    )
}