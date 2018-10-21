import React, {Component} from 'react';
import 'object-assign-polyfill';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Tickets from './components/tickets/Tickets';
import './media.css';
import {polyfill} from 'es6-promise'; polyfill(); //ie11 fix

class App extends Component {
    render() {
        return (
            <div className='main'>
                <img
                    className='logo'
                    src='/logo.svg'
                    alt='logo'
                    width={60}
                />
                <Sidebar/>
                <Tickets/>
            </div>
        );
    }
}

export default App