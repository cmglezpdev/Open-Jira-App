import { uiState } from './UIProvider';

type uiActionType = 
| { type: '[ui] Open Sidebar' }
| { type: '[ui] Close Sidebar' }



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

            default:
                return state;
    }
}