import { uiState } from './UIProvider';

type uiActionType = 
| { type: '[ui] Open Sidebar' }
| { type: '[ui] Close Sidebar' }
| { type: '[ui] Is Adding Entry', payload: boolean }
| { type: '[ui] Is Dragging Entry', payload: boolean }



export const uiReducer = ( state: uiState, action:uiActionType ) => {

    switch( action.type ) {
        case '[ui] Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        
        case '[ui] Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }
        
        case '[ui] Is Adding Entry':
            return {
                ...state,
                isAddingEntry: action.payload
            }

        case '[ui] Is Dragging Entry':
            return {
                ...state,
                isDraggingEntry: action.payload
            }

            default:
                return state;
    }
}