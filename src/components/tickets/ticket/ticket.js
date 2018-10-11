import React, {Component} from 'react';
import './ticket.css';

class Ticket extends Component {
    render() {
        const helper = {
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
                    text = 'пересадка';
                } else if (stops > 1 && stops < 5) {
                    text = 'пересадки';
                } else if (stops >= 5) {
                    text = 'пересадок';
                }

                return stops + ' ' + text;
            },
            formatDate(date, type) {
                let _date = new Date(date.replace(/\./g, '/')),
                    _day = _date.getDay(),
                    _d = _date.getDate(),
                    _m = _date.getMonth(),
                    _y = _date.getFullYear();

                const month = value => ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'][value];
                const day = value => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][value];

                if (type === 'month') {
                    return _d + ' ' + month(_m) + ' ' + _y;
                } else if (type === 'day') {
                    return day(_day);
                }

                return date;
            },
            formatPrice(num) {
                // kolhoz
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

        const {
            carrier = 'carrier',
            price = 0,
            departure_time = 'XX:XX',
            stops = 0,
            arrival_time = 'XX:XX',
            origin = 'origin',
            origin_name = 'origin_name',
            destination = 'destination',
            destination_name = 'destination_name',
            departure_date = 'departure_date',
            arrival_date = 'arrival_date',
        } = this.props.data;

        return (
            <div className='ticket'>
                <div className='ticket-main'>
                    <img src={helper.img(carrier, 'img')} alt={helper.img(carrier, 'alt')} width={120} height={35}/>
                    <a href={'/'}><span>Купить</span>за {helper.formatPrice((price * this.props.currRate).toFixed())}{this.props.currSymb}</a>
                </div>
                <div className='ticket-details'>
                    <div className='ticket-time df jcsb'>
                        <div className='tal'>{departure_time}</div>
                        {stops >= 1 && <div className='ticket-stops'>{helper.formatStops(stops)}</div>}
                        <div className='tar'>{arrival_time}</div>
                    </div>
                    <div className='ticket-city df jcsb'>
                        <div className='tal'>{origin}, {origin_name}</div>
                        <div className='tar'>{destination}, {destination_name}</div>
                    </div>
                    <div className='ticket-date df jcsb'>
                        <div className='tal'>{helper.formatDate(departure_date, 'month')}, {helper.formatDate(departure_date, 'day')}</div>
                        <div className='tar'>{helper.formatDate(arrival_date, 'month')}, {helper.formatDate(arrival_date, 'day')}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;
