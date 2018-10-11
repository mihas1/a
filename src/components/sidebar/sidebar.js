import React, {Component} from 'react';
import './sidebar.css';
import Currency from './currency/currency';
import Stops from './stops/stops';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <Currency set={this.props.set}/>
                <Stops set={this.props.set}/>
            </div>
        );
    }
}

export default Sidebar;
