import React, {Component} from 'react';
import './stops.css';

class Stops extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stops: [
                {
                    filter: 'all',
                    text: 'Все'
                },
                {
                    filter: 'none',
                    text: 'Без пересадок'
                },
                {
                    filter: 'one',
                    text: '1 пересадка'
                },
                {
                    filter: 'two',
                    text: '2 пересадки'
                },
                {
                    filter: 'three',
                    text: '3 пересадки'
                },
            ]
        };
    }

    render() {
        const stops = this.state.stops.map((item, i) => {
            return (
                <div className='stops-item' key={i + '_' + item.filter}>
                    <input id={item.filter} type='checkbox' defaultChecked={item.filter === 'all'}/>
                    <label className='stops-label' htmlFor={item.filter}>
                        {item.text}
                    </label>
                </div>
            )
        });

        return (
            <div className='stops'>
                <div className='sidebar-title stops-title'>Количество пересадок</div>
                <div className='stops-container'>
                    {stops}
                </div>
            </div>
        );
    }
}

export default Stops;