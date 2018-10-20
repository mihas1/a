import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tickets.css';
import Ticket from './ticket/Ticket';
import 'whatwg-fetch';

class Tickets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: []
        };
    }

    componentDidMount() {
        window.fetch('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let state = Object.assign({}, this.state);
                state.tickets = responseJson.tickets;

                // todo добавить поиск минимальных цен
                state.tickets = state.tickets.sort((a,b) => {
                    return a.price - b.price;
                });

                this.setState(state);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { filters, currRate, currSymb } = this.props;
        let prep = this.state.tickets.slice();

        // filter
        prep = prep.filter((item) => {
            return filters[item.stops]
        });

        const tickets = prep.map((item) => {
            return <Ticket
                data={item}
                currSymb={currSymb}
                currRate={currRate}
                key={item.arrival_date + '_' + item.arrival_time}
            />
        });

        return (
            <div className='tickets-container'>
                {tickets}
            </div>
        );
    }
}

Tickets.propTypes = {
    filters: PropTypes.object.isRequired,
    currSymb: PropTypes.string.isRequired,
    currRate: PropTypes.number.isRequired,
};

export default Tickets;
