import {scheme} from "../store/scheme";
import {SET_FILTER_AVAILABLE, SET_FILTER_ACTIVE} from "../actions/actions";

export function filtersReducer(state = scheme.filters, action) {
    switch (action.type) {
        case SET_FILTER_AVAILABLE:
            return {...state, available: action.payload};

        case SET_FILTER_ACTIVE:
            return {...state, active: action.payload};

        default:
            return state
    }
}