import React, {Component} from 'react';
import './ticket.css';

class Ticket extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const logo = (carrier) => {
            // pick a logo by carrier, could switch to api
            const helper = {
                'TK': '/tk.png',
                'S7': '/s7.png',
                'BA': '/ba.png',
                'SU': '/su.png'
            };

            if (carrier in helper) {
                return helper[carrier];
            }

            return '';
        };

        const alt = (carrier) => {
            // pick a alt by carrier, could switch to api
            const helper = {
                'TK': 'turkish airlines',
                'S7': 's7',
                'BA': 'british airways',
                'SU': 'aeroflot'
            };

            if (carrier in helper) {
                return helper[carrier];
            }

            return '';
        };

        const formatStops = (stops) => {
            let text = '';

            if (stops === 1) {
                text = 'пересадка';
            } else if (stops > 1 && stops < 5) {
                text = 'пересадки';
            } else if (stops >= 5) {
                text = 'пересадок';
            }

            return stops + ' ' + text;
        };

        const formatPrice = (price) => {
            return prepNum((price * this.props.currRate).toFixed());

            function prepNum(num) {
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
                } else {
                    return num;
                }

                return _r;
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
                    <img src={logo(carrier)} alt={alt(carrier)} width={120} height={35}/>
                    <a href={'/'}><span>Купить за</span> {formatPrice(price)}{this.props.currSymb}</a>
                </div>
                <div className='ticket-details'>
                    <div className='ticket-time df jcsb'>
                        <div className='tal'>{departure_time}</div>
                        {stops >= 1 && <div className='ticket-stops'>{formatStops(stops)}</div>}
                        <div className='tar'>{arrival_time}</div>
                    </div>
                    <div className='ticket-city df jcsb'>
                        <div className='tal'>{origin}, {origin_name}</div>
                        <div className='tar'>{destination}, {destination_name}</div>
                    </div>
                    <div className='ticket-date df jcsb'>
                        <div className='tal'>{departure_date}</div>
                        <div className='tar'>{arrival_date}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;
