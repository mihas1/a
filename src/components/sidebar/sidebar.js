import React, {Component} from 'react';
import './sidebar.css';
import Currency from './currency/currency';
import Stops from './stops/stops';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div className='sidebar'>
                <Currency />
                <Stops />
            </div>
        );
    }
}

export default Sidebar;
