/** example of store
{
    page: {
        tickets: [],
    },
    filters: {
        available: [],
        active: [],
        min_prices: {}
    },
    currency: {
        available: ['RUB', 'USD', 'EUR'],
        active: 'RUB',
        symbol: '',
        rate: 1
    },
}
*/

import {createStore} from 'redux'
import {rootReducer} from '../reducers/index'

export const store = createStore(rootReducer);