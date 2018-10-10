import React, {Component} from 'react';
import './animation.css';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Tickets from './components/tickets/tickets';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            filters: [],
            tickets: []
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        return fetch('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let state = Object.assign({}, this.state);
                state.isLoading = false;
                state.tickets = responseJson.tickets;

                this.setState(state, () => {
                    console.log(this.state.tickets)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {


        return (
            <div className='main'>
                <img className='logo' src='/logo.svg' alt='logo' width={60}/>
                <Sidebar />
                <Tickets tickets={this.state.tickets} />
            </div>
        );
    }
}

export default App;