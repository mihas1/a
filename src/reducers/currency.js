import {scheme} from "../store/scheme";
import { SET_CURRENCY, SET_CURRENCY_RATE, SET_CURRENCY_SYMBOL } from "../actions/actions";

export function currencyReducer(state = scheme.currency, action) {
    switch (action.type) {
        case SET_CURRENCY:
            return {...state, active: action.payload};

        case SET_CURRENCY_RATE:
            return {...state, rate: action.payload};

        case SET_CURRENCY_SYMBOL:
            return {...state, symbol: action.payload};

        default:
            return state
    }
}