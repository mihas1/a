import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { helper } from '../../../helper';
import './ticket.css';

class Ticket extends Component {
    render() {
        const { data, symbol, rate} = this.props;
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
        } = data;

        return (
            <div className='ticket'>
                <div className='ticket-main'>
                    <img
                        src={helper.img(carrier, 'img')}
                        alt={helper.img(carrier, 'alt')}
                        width={120}
                        height={35}
                    />
                    <a href={'/'}>
                        <span>Купить</span>за {helper.formatPrice((price * rate).toFixed())}{symbol}
                    </a>
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

Ticket.propTypes = {
    data: PropTypes.object.isRequired,
    symbol: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};

export default Ticket;
