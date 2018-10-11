import React, {Component} from 'react';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Tickets from './components/tickets/tickets';
import './media.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            currencySymb: '',
            currencyRate: 1
        };

        this.set = this.set.bind(this);
    }

    set(name, val) {
        this.setState({[name]: val});
    }

    render() {
        return (
            <div className='main'>
                <img className='logo' src='/logo.svg' alt='logo' width={60}/>
                <Sidebar set={this.set}/>
                <Tickets currSymb={this.state.currencySymb} currRate={this.state.currencyRate} filters={this.state.filters}/>
            </div>
        );
    }
}

export default App;