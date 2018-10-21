import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tickets.css';
import Ticket from './ticket/Ticket';
import 'whatwg-fetch';

class Tickets extends Component {
    componentDidMount() {
        this.setTickets();
    }

    setTickets() {
        window.fetch('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
            .then((response) => response.json())
            .then((responseJson) => {
                const {setTickets, setFilterAvailable} = this.props;
                let tickets = responseJson.tickets.slice(),
                    _h = {};

                // костыль с расчетом доступных фильтров и минимальных цен, нужно переделать алгоритм
                tickets = tickets.sort((a,b) => {
                    if (a.stops in _h) {
                        if (a.price < _h[a.stops]) {
                            _h[a.stops] = a.price;
                        }
                    } else {
                        _h[a.stops] = a.price;
                    }

                    if (b.stops in _h) {
                        if (b.price < _h[b.stops]) {
                            _h[b.stops] = b.price;
                        }
                    } else {
                        _h[b.stops] = b.price;
                    }

                    return a.price - b.price;
                });

                setFilterAvailable(_h);
                setTickets(tickets);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { tickets, filters, symbol, rate } = this.props;
        let prep = tickets.slice();

        // filter
        if (!('all' in filters)) {
            prep = prep.filter((item) => {
                return item.stops in filters
            });
        }

        const ticketsHtml = prep.map((item) => {
            return <Ticket
                data={item}
                symbol={symbol}
                rate={rate}
                key={item.arrival_date + '_' + item.arrival_time}
            />
        });

        return (
            <div className='tickets-container'>
                {ticketsHtml}
            </div>
        );
    }
}

Tickets.propTypes = {
    tickets: PropTypes.array,
    filters: PropTypes.object.isRequired,
    symbol: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    setTickets: PropTypes.func.isRequired,
    setFilterAvailable: PropTypes.func.isRequired,
};

export default Tickets;