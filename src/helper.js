export const helper = {
    img(carrier, type) {
        const db = {
            'TK': {
                img: '/tk.png',
                alt: 'turkish airlines'
            },
            'S7': {
                img: '/s7.png',
                alt: 's7'
            },
            'BA': {
                img: '/ba.png',
                alt: 'british airways'
            },
            'SU': {
                img: '/su.png',
                alt: 'aeroflot'
            }
        };

        if (carrier in db) {
            if (type in db[carrier]) {
                return db[carrier][type];
            }
        }

        return '';
    },
    formatStops(stops) {
        let text = '',
            val = stops;

        if (!isNaN(parseFloat(val))) val = parseFloat(val);

        if (val === 1) {
            text = ' пересадка';
        } else if (val > 1 && val < 5) {
            text = ' пересадки';
        } else if (val >= 5) {
            text = ' пересадок';
        } else if (val === 0) {
            return 'Без пересадок'
        } else if (val === 'all') {
            return 'Все';
        }

        return val + text;
    },
    monthByNum(value) {
        return ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'][value]
    },
    dayByNum(value) {
        return ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][value]
    },
    formatDate(date, type) {
        let _date = new Date(date.replace(/\./g, '/')),
            _day = _date.getDay(),
            _d = _date.getDate(),
            _m = _date.getMonth(),
            _y = _date.getFullYear();

        if (type === 'month') {
            return _d + ' ' + this.monthByNum(_m) + ' ' + _y;
        } else if (type === 'day') {
            return this.dayByNum(_day);
        }

        return date;
    },
    formatPrice(num) {
        let _p = num,
            _t = 3,
            _r = '';

        if (_p.length > 3) {
            for (let i = _p.length; i !== 0; i--) {
                if (_t === 0) {
                    _r = _p[i - 1] + ' ' + _r;
                    _t = 3;
                } else {
                    _r = _p[i - 1] + '' + _r;
                    _t--;
                }
            }
            return _r;
        }

        return num;
    }
};