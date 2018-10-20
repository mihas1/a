import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import Currency from './currency/Currency';
import Stops from './stops/Stops';

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

Sidebar.propTypes = {
    set: PropTypes.func.isRequired,
};

export default Sidebar;
