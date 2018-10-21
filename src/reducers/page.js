import {scheme} from '../store/scheme';
import {SET_TICKETS} from '../actions/actions';

export function pageReducer(state = scheme.page, action) {
    switch (action.type) {
        case SET_TICKETS:
            return {...state, tickets: action.payload};

        default:
            return state
    }
}