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
                let tickets = responseJson.tickets;

                // todo добавить поиск минимальных цен
                tickets = tickets.sort((a,b) => {
                    return a.price - b.price;
                });

                this.props.setTickets(tickets);

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { tickets, filters, currRate, currSymb } = this.props;
        let prep = tickets.slice();

        // filter
        prep = prep.filter((item) => {
            return filters[item.stops]
        });

        const ticketsHtml = prep.map((item) => {
            return <Ticket
                data={item}
                currSymb={currSymb}
                currRate={currRate}
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
    currSymb: PropTypes.string.isRequired,
    currRate: PropTypes.number.isRequired,
    setTickets: PropTypes.func.isRequired,
};

export default Tickets;