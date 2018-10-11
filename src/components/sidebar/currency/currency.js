import React, {Component} from 'react';
import 'whatwg-fetch';
import './currency.css';

class Currency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: ['RUB', 'USD', 'EUR'],
            active: 'RUB'
        };

        this.getCurrSymbol = this.getCurrSymbol.bind(this);
        this.getCurrRate = this.getCurrRate.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    componentDidMount() {
        this.getCurrSymbol();
    }

    getCurrSymbol() {
        window.fetch('https://restcountries.eu/rest/v2/currency/' + this.state.active)
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.set('currencySymb', responseJson[0]['currencies'][0]['symbol']);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getCurrRate() {
        if (this.state.active === 'RUB') {
            this.props.set('currencyRate', 1);
            return false;
        } else {
            window.fetch('https://free.currencyconverterapi.com/api/v5/convert?q=RUB_' + this.state.active + '&compact=y')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.set('currencyRate', responseJson['RUB_' + this.state.active]['val']);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    changeCurrency(currency) {
        this.setState({active: currency}, () => {
            this.getCurrSymbol();
            this.getCurrRate();
        });
    }

    render() {
        const currencies = this.state.currencies.map((item, i) => {
            return (
                <div className={'currency-btn ' + (this.state.active === item ? 'active' : '')}
                    onClick={() => this.changeCurrency(item)}
                    key={i + '_' + item}>
                    {item}
                </div>
            )
        });

        return (
            <div className='currency'>
                <div className='sidebar-title currency-title'>Валюта</div>
                <div className='currency-container'>{currencies}</div>
            </div>
        );
    }
}

export default Currency;