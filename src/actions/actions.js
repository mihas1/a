export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_CURRENCY_RATE = 'SET_CURRENCY_RATE';
export const SET_CURRENCY_SYMBOL = 'SET_CURRENCY_SYMBOL';
export const SET_TICKETS = 'SET_TICKETS';
export const SET_FILTER_ACTIVE = 'SET_FILTER_ACTIVE';

export function setCurrency(currency) {
    return {
        type: SET_CURRENCY,
        payload: currency,
    }
}

export function setCurrencyRate(rate) {
    return {
        type: SET_CURRENCY_RATE,
        payload: rate,
    }
}

export function setCurrencySymbol(symbol) {
    return {
        type: SET_CURRENCY_SYMBOL,
        payload: symbol,
    }
}

export function setTickets(tickets) {
    return {
        type: SET_TICKETS,
        payload: tickets,
    }
}

export function setFilterActive(filter) {
    return {
        type: SET_FILTER_ACTIVE,
        payload: filter,
    }
}