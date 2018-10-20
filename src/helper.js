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
        let text = '';

        if (stops === 1) {
            text = ' пересадка';
        } else if (stops > 1 && stops < 5) {
            text = ' пересадки';
        } else if (stops >= 5) {
            text = ' пересадок';
        } else if (stops === 0) {
            return 'Без пересадок'
        } else if (stops === 'all') {
            return 'Все';
        }

        return stops + text;
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