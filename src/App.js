import React, {Component} from 'react';
import {connect} from 'react-redux'
import 'object-assign-polyfill';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Tickets from './components/tickets/Tickets';
import './media.css';
import {setTickets, setCurrency, setCurrencyRate, setCurrencySymbol, setFilterAvailable, setFilterActive} from './actions/actions';
import {polyfill} from 'es6-promise'; polyfill(); //ie11 fix

class App extends Component {
    render() {
        const {currency, filters, page, setTicketsAction, setCurrencyAction, setCurrencyRateAction, setCurrencySymbolAction, setFilterAvailableAction, setFilterActiveAction} = this.props;

        return (
            <div className='main'>
                <img
                    className='logo'
                    src='/logo.svg'
                    alt='logo'
                    width={60}
                />
                <Sidebar
                    filters={filters}
                    currency={currency}
                    setCurrency={setCurrencyAction}
                    setCurrencyRate={setCurrencyRateAction}
                    setCurrencySymbol={setCurrencySymbolAction}
                    setFilterActive={setFilterActiveAction}
                />
                <Tickets
                    tickets={page.tickets}
                    filters={filters.active}
                    symbol={currency.symbol}
                    rate={currency.rate}
                    setTickets={setTicketsAction}
                    setFilterAvailable={setFilterAvailableAction}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        currency: store.currency,
        filters: store.filters,
        page: store.page,
    }
};

const mapDispatchToProps = dispatch => ({
    setTicketsAction: tickets => dispatch(setTickets(tickets)),
    setCurrencyAction: currency => dispatch(setCurrency(currency)),
    setCurrencyRateAction: rate => dispatch(setCurrencyRate(rate)),
    setCurrencySymbolAction: symbol => dispatch(setCurrencySymbol(symbol)),
    setFilterAvailableAction: filters => dispatch(setFilterAvailable(filters)),
    setFilterActiveAction: filter => dispatch(setFilterActive(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)