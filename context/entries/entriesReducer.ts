import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
    | { type: '[Entries] ActionName' }



export const entriesReducer = ( state: EntriesState, action:EntriesActionType ) => {

    switch( action.type ) {
        case '[Entries] ActionName':
            return {
                ...state,
            }

        default:
            return state;
    }
}