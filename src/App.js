import React, {Component} from 'react';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Tickets from './components/tickets/tickets';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            currencySymb: '',
            currencyRate: 1
        };

        this.setCurrencySymb = this.setCurrencySymb.bind(this);
        this.setCurrencyRate = this.setCurrencyRate.bind(this);
        this.setFilters = this.setFilters.bind(this);
    }

    setCurrencySymb(symb) {
        this.setState({currencySymb: symb});
    }

    setCurrencyRate(rate) {
        this.setState({currencyRate: rate});
    }

    setFilters(filters) {
        this.setState({filters: filters});
    }

    render() {
        return (
            <div className='main'>
                <img className='logo' src='/logo.svg' alt='logo' width={60}/>
                <Sidebar setCurrSymb={this.setCurrencySymb} setCurrRate={this.setCurrencyRate} setFilters={this.setFilters}/>
                <Tickets currSymb={this.state.currencySymb} currRate={this.state.currencyRate} filters={this.state.filters}/>
            </div>
        );
    }
}

export default App;