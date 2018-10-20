import React, {Component} from 'react';
import OnlyHtml from './OnlyHtml';
import { helper } from '../../../helper';
import './stops.css';

class Stops extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: {},
            stops: ['all', 0, 1, 2, 3]
        };

        this.onChange = this.onChange.bind(this);
        this.only = this.only.bind(this);
    }

    componentDidMount() {
        this.onChange();
    }

    onChange(filter) {
        let state = Object.assign({}, this.state);

        if (filter !== undefined) {
            if (filter === 'all') {
                let all = state.checked.all;

                for (let i = 0; i < state.stops.length; i++) {
                    state.checked[state.stops[i]] = !all;
                }
            } else {
                state.checked['all'] = false;

                if (filter in state.checked) {
                    state.checked[filter] = !state.checked[filter];
                } else {
                    state.checked[filter] = true;
                }
            }
        } else {
            for (let i = 0; i < state.stops.length; i++) {
                state.checked[state.stops[i]] = true;
            }
        }

        this.setState(state, () => {
            this.props.set('filters', this.state.checked);
        });
    }

    only(filter) {
        let state = Object.assign({}, this.state);
        if (filter === 'all') {
            for (let i = 0; i < state.stops.length; i++) {
                state.checked[state.stops[i]] = true;
            }
        } else {
            for (let i in state.checked) {
                state.checked[i] = false;
            }
            state.checked[filter] = true;
        }

        this.setState(state, () => {
            this.props.set('filters', this.state.checked);
        });
    }

    render() {
        const stops = this.state.stops.map((filter, i) => {
            return (
                <div className='stops-item' key={i + '_' + filter}>
                    <input
                        id={filter}
                        type='checkbox'
                        checked={!!this.state.checked[filter]}
                        onChange={() => this.onChange(filter)}
                    />
                    <label className='stops-label' htmlFor={filter}>
                        {helper.formatStops(filter)}
                    </label>
                    {filter !== 'all' && <OnlyHtml only={this.only} filter={filter}/>}
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