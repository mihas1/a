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
                    filter: 0,
                    text: 'Без пересадок'
                },
                {
                    filter: 1,
                    text: '1 пересадка'
                },
                {
                    filter: 2,
                    text: '2 пересадки'
                },
                {
                    filter: 3,
                    text: '3 пересадки'
                },
            ],
            checked: {
                'all': true
            }
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.onChange();
    }

    onChange(filter) {
        let state = Object.assign({}, this.state);

        if (filter !== 'undefined') {
            if (filter in state.checked) {
                state.checked[filter] = !state.checked[filter];
            } else {
                state.checked[filter] = true;
            }
        }

        this.setState(state, () => {
            this.props.setFilters(this.state.checked);
        });
    }


    render() {
        const stops = this.state.stops.map((item, i) => {
            return (
                <div className='stops-item' key={i + '_' + item.filter}>
                    <input
                        id={item.filter}
                        type='checkbox'
                        defaultChecked={this.state.checked[item.filter]}
                        onChange={() => this.onChange(item.filter)}/>
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