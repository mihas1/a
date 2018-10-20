import React, {Component} from 'react';
import { connect } from 'react-redux'
import 'object-assign-polyfill';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Tickets from './components/tickets/Tickets';
import './media.css';
import { polyfill } from 'es6-promise'; polyfill(); //ie11 fix

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            currSymb: '',
            currRate: 1
        };

        this.set = this.set.bind(this);
    }

    set(name, val) {
        this.setState({[name]: val});
    }

    render() {
        const {filters, currRate, currSymb} = this.state;

        return (
            <div className='main'>
                <img className='logo' src='/logo.svg' alt='logo' width={60}/>
                <Sidebar set={this.set}/>
                <Tickets currSymb={currSymb} currRate={currRate} filters={filters}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        currency: store.currency,
        filters: store.filters,
        page: store.page,
    }
};

export default connect(mapStateToProps)(App)