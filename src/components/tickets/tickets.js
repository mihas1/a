import React, {Component} from 'react';
import './tickets.css';
import Ticket from './ticket/ticket';
import 'whatwg-fetch';

class Tickets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: []
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        window.fetch('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let state = Object.assign({}, this.state);
                state.tickets = responseJson.tickets;

                this.setState(state);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let filters = this.props.filters,
            prep = this.state.tickets.slice();

        // filter
        if (filters['all'] === false) {
            prep = prep.filter((item) => {
                return filters[item.stops] === true
            });
        }

        prep = prep.sort((a,b) => {
            return a.price - b.price;
        });

        const tickets = prep.map((item) => {
            return <Ticket data={item} currSymb={this.props.currSymb} currRate={this.props.currRate} key={item.arrival_date + '_' + item.arrival_time}/>
        });

        return (
            <div className='tickets-container'>
                {tickets}
            </div>
        );
    }
}

export default Tickets;
