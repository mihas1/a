import React, {Component} from 'react';
import PropTypes from "prop-types";
import 'whatwg-fetch';
import './currency.css';

class Currency extends Component {
    componentDidMount() {
        this.getCurrSymbol(this.props.currency.active);
    }

    getCurrSymbol(currency) {
        window.fetch('https://restcountries.eu/rest/v2/currency/' + currency)
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.setCurrencySymbol(responseJson[0]['currencies'][0]['symbol']);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getCurrRate(currency) {
        if (currency === 'RUB') {
            this.props.setCurrencyRate(1);
        } else {
            window.fetch('https://free.currencyconverterapi.com/api/v5/convert?q=RUB_' + currency + '&compact=y')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.setCurrencyRate(responseJson['RUB_' + currency]['val']);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    changeCurrency(currency) {
        this.getCurrSymbol(currency);
        this.getCurrRate(currency);
        this.props.setCurrency(currency);
    }

    render() {
        const {currency} = this.props;
        const {active, available} = currency;

        const currenciesHtml = available.map((item, i) => {
            return (
                <div className={'currency-btn ' + (active === item ? 'active' : '')}
                    onClick={() => this.changeCurrency(item)}
                    key={i + '_' + item}>
                    {item}
                </div>
            )
        });

        return (
            <div className='currency'>
                <div className='sidebar-title currency-title'>Валюта</div>
                <div className='currency-container'>{currenciesHtml}</div>
            </div>
        );
    }
}

Currency.propTypes = {
    currency: PropTypes.object.isRequired,
    setCurrency: PropTypes.func.isRequired,
    setCurrencyRate: PropTypes.func.isRequired,
    setCurrencySymbol: PropTypes.func.isRequired

};

export default Currency;