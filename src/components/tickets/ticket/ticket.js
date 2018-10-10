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

        const stops = (stops) => {
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

        return (
            <div className='ticket'>
                <div className='ticket-main'>
                    <img src={logo(this.props.data.carrier)} alt={alt(this.props.data.carrier)} width={120} height={35}/>
                    <a href={'/'}><span>Купить за</span> {this.props.data.price}</a>
                </div>
                <div className='ticket-details'>
                    <div className='ticket-time df jcsb'>
                        <div className='tal'>{this.props.data.departure_time}</div>
                        {this.props.data.stops >= 1 && <div className='ticket-stops'>{stops(this.props.data.stops)}</div>}
                        <div className='tar'>{this.props.data.arrival_time}</div>
                    </div>
                    <div className='ticket-city df jcsb'>
                        <div className='tal'>{this.props.data.origin}, {this.props.data.origin_name}</div>
                        <div className='tar'>{this.props.data.destination}, {this.props.data.destination_name}</div>
                    </div>
                    <div className='ticket-date df jcsb'>
                        <div className='tal'>{this.props.data.departure_date}</div>
                        <div className='tar'>{this.props.data.arrival_date}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;
