import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entry';


type EntriesActionType = 
    | { type: '[Entry] AddEntry', payload:Entry }
    | { type: '[Entry] Update Entry', payload:Entry }
    | { type: '[Entry] Delete Data', payload:Entry }
    | { type: '[Entry] Refresh Data', payload:Entry[] }



export const entriesReducer = ( state: EntriesState, action:EntriesActionType ) => {
    // in each action, the entries are sorted
    switch( action.type ) {
        case '[Entry] AddEntry':
            return {
                ...state,
                entries:[ action.payload, ...state.entries ]
            }

        case '[Entry] Update Entry':
            return {
                ...state,
                entries: [
                    action.payload, 
                    ...state.entries.filter(entry => entry._id !== action.payload._id)
                ]
            }
        
        case '[Entry] Refresh Data':
            return {
                ...state,
                entries: action.payload.sort((a, b) => b.createAt - a.createAt)
            }

        case '[Entry] Delete Data':
            return {
                ...state,
                entries: state.entries.filter(entry => entry._id !== action.payload._id)
            }
        default:
            return state;
    }
}