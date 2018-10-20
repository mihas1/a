const initialState = {
    available: ['RUB', 'USD', 'EUR'],
    active: 'RUB',
    symbol: '',
    rate: 1
};

export function currencyReducer(state = initialState) {
    return state
}