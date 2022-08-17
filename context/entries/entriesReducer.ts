import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entry';


type EntriesActionType = 
    | { type: '[Entry] AddEntry', payload:Entry }



export const entriesReducer = ( state: EntriesState, action:EntriesActionType ) => {

    switch( action.type ) {
        case '[Entry] AddEntry':
            return {
                ...state,
                entries:[ ...state.entries, action.payload ]
            }

        default:
            return state;
    }
}