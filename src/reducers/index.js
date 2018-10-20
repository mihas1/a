import {combineReducers} from 'redux'
import {currencyReducer} from './currency'
import {filtersReducer} from './filters'
import {pageReducer} from './page'

export const rootReducer = combineReducers({
    currency: currencyReducer,
    filters: filtersReducer,
    page: pageReducer,
});