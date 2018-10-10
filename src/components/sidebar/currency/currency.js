import React, {Component} from 'react';
import './currency.css';

class Currency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: ['RUB', 'USD', 'EUR'],
            active: 'RUB'
        };
    }

    render() {
        const currencies = this.state.currencies.map((item, i) => {
            return (
                <div className={'currency-btn ' + (this.state.active === item ? 'active' : '')}
                    onClick={() => this.setState({active: item})}
                    key={i + '_' + item}>
                    {item}
                </div>
            )
        });

        return (
            <div className='currency'>
                <div className='sidebar-title currency-title'>Валюта</div>
                <div className='currency-container'>
                    {currencies}
                </div>
            </div>
        );
    }
}

export default Currency;