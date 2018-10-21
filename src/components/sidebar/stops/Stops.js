import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OnlyHtml from './OnlyHtml';
import { helper } from '../../../helper';
import './stops.css';

class Stops extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.only = this.only.bind(this);
    }

    componentDidMount() {
        this.onChange();
    }

    onChange(filter) {
        const {filters, setFilterActive} = this.props;
        const {active} = filters;

        let _active = Object.assign({}, active);

        if (filter !== undefined) {
            if (filter in _active) {
                delete _active[filter];
                delete _active['all'];
            } else {
                _active[filter] = null;

                if (filter !== 'all') {
                    delete _active['all'];
                }
            }
        } else {
            _active.all = null;
        }

        setFilterActive(_active);
    }

    only(filter) {
        this.props.setFilterActive({
            [filter]: null
        });
    }

    render() {
        const {currency, filters} = this.props;
        const {symbol, rate} = currency;
        const {available, active} = filters;

        const stops = Object.keys(available).map((filter, i) => {
            return (
                <div className='stops-item' key={i + '_' + filter}>
                    <input
                        id={filter}
                        type='checkbox'
                        checked={filter in active}
                        onChange={() => this.onChange(filter)}
                    />
                    <label className='stops-label' htmlFor={filter}>
                        {helper.formatStops(filter)}
                        <span className='stops-from'>
                            от {helper.formatPrice((available[filter] * rate).toFixed())}{symbol}
                        </span>
                    </label>
                    {filter !== 'all' && <OnlyHtml only={this.only} filter={filter}/>}
                </div>
            )
        });

        return (
            <div className='stops'>
                <div className='sidebar-title stops-title'>Количество пересадок</div>
                <div className='stops-container'>
                    <div className='stops-item'>
                        <input
                            id='all'
                            type='checkbox'
                            checked={'all' in active}
                            onChange={() => this.onChange('all')}
                        />
                        <label className='stops-label' htmlFor='all'>
                            {helper.formatStops('all')}
                        </label>
                    </div>
                    {stops}
                </div>
            </div>
        );
    }
}


Stops.propTypes = {
    currency: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    setFilterActive: PropTypes.func.isRequired
};

export default Stops;