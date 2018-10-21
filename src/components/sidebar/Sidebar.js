import React, {Component} from 'react';
import {connect} from 'react-redux'
import './sidebar.css';
import Currency from './currency/Currency';
import Stops from './stops/Stops';
import {setCurrency, setCurrencyRate, setCurrencySymbol, setFilterActive} from '../../actions/actions';

class Sidebar extends Component {
    render() {
        const {currency, filters, setCurrencyAction, setCurrencyRateAction, setCurrencySymbolAction, setFilterActiveAction} = this.props;

        return (
            <div className='sidebar'>
                <Currency
                    currency={currency}
                    setCurrency={setCurrencyAction}
                    setCurrencyRate={setCurrencyRateAction}
                    setCurrencySymbol={setCurrencySymbolAction}
                />
                <Stops
                    currency={currency}
                    filters={filters}
                    setFilterActive={setFilterActiveAction}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        currency: store.currency,
        filters: store.filters
    }
};

const mapDispatchToProps = dispatch => ({
    setCurrencyAction: currency => dispatch(setCurrency(currency)),
    setCurrencyRateAction: rate => dispatch(setCurrencyRate(rate)),
    setCurrencySymbolAction: symbol => dispatch(setCurrencySymbol(symbol)),
    setFilterActiveAction: filter => dispatch(setFilterActive(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)