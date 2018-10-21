export const scheme = {
    page: {
        tickets: [],
    },
    filters: {
        available: ['all', 0, 1, 2, 3], //todo надо сделать поиск доступных фильтров
        active: {},
        min_prices: {}
    },
    currency: {
        available: ['RUB', 'USD', 'EUR'],
        active: 'RUB',
        symbol: '',
        rate: 1
    },
};