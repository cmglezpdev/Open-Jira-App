import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entry';


type EntriesActionType = 
    | { type: '[Entry] AddEntry', payload:Entry }
    | { type: '[Entry] Update Entry', payload:Entry }



export const entriesReducer = ( state: EntriesState, action:EntriesActionType ) => {

    switch( action.type ) {
        case '[Entry] AddEntry':
            return {
                ...state,
                entries:[ ...state.entries, action.payload ]
            }
        case '[Entry] Update Entry':
            return {
                ...state,
                entries: state.entries.map( entry => ( entry._id === action.payload._id ) ? action.payload : entry )
            }
        default:
            return state;
    }
}