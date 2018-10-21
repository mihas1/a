import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import Currency from './currency/Currency';
import Stops from './stops/Stops';

class Sidebar extends Component {
    render() {
        const {currency, filters, setCurrency, setCurrencyRate, setCurrencySymbol, setFilterActive} = this.props;

        return (
            <div className='sidebar'>
                <Currency currency={currency} setCurrency={setCurrency} setCurrencyRate={setCurrencyRate} setCurrencySymbol={setCurrencySymbol}/>
                <Stops filters={filters} setFilterActive={setFilterActive}/>
            </div>
        );
    }
}

Sidebar.propTypes = {
    currency: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    setCurrency: PropTypes.func.isRequired,
    setCurrencyRate: PropTypes.func.isRequired,
    setCurrencySymbol: PropTypes.func.isRequired,
    setFilterActive: PropTypes.func.isRequired

};

export default Sidebar;
