import React, {Component} from 'react';
import {connect} from 'react-redux'
import './tickets.css';
import Ticket from './ticket/Ticket';
import 'whatwg-fetch';
import {setFilterAvailable, setTickets} from '../../actions/actions';

class Tickets extends Component {
    componentDidMount() {
        this.setTickets();
    }

    setTickets() {
        window.fetch('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
            .then((response) => response.json())
            .then((responseJson) => {
                const {setTicketsAction, setFilterAvailableAction} = this.props;
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

                setFilterAvailableAction(_h);
                setTicketsAction(tickets);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const {page, filters, currency} = this.props;
        const {tickets} = page;
        const {active} = filters;
        const {symbol, rate} = currency;

        let prep = tickets.slice();

        // filter
        if (!('all' in active)) {
            prep = prep.filter((item) => {
                return item.stops in active
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

const mapStateToProps = store => {
    return {
        currency: store.currency,
        filters: store.filters,
        page: store.page,
    }
};

const mapDispatchToProps = dispatch => ({
    setTicketsAction: tickets => dispatch(setTickets(tickets)),
    setFilterAvailableAction: filters => dispatch(setFilterAvailable(filters))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tickets)