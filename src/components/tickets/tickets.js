import React, {Component} from 'react';
import './tickets.css';
import Ticket from './ticket/ticket';

class Tickets extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const tickets = this.props.tickets.map((item) => {
            return <Ticket data={item} key={item.arrival_date + '_' + item.arrival_time}/>
        });

        return (
            <div className='tickets-container'>
                {tickets}
            </div>
        );
    }
}

export default Tickets;
