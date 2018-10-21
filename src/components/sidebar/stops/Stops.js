import React, {Component} from 'react';
import PropTypes from "prop-types";
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
        const {filters,setFilterActive} = this.props;
        const {available,active} = filters;

        let _active = Object.assign({}, active);

        if (filter !== undefined) {
            if (filter === 'all') {
                let all = _active.all;

                for (let i = 0; i < available.length; i++) {
                    _active[available[i]] = !all;
                }
            } else {
                _active['all'] = false;

                if (filter in _active) {
                    _active[filter] = !_active[filter];
                } else {
                    _active[filter] = true;
                }
            }
        } else {
            for (let i = 0; i < available.length; i++) {
                _active[available[i]] = true;
            }
        }

        setFilterActive(_active);
    }

    only(filter) {
        const {filters,setFilterActive} = this.props;
        const {available,active} = filters;

        let _active = Object.assign({}, active);

        if (filter === 'all') {
            for (let i = 0; i < available.length; i++) {
                _active[available[i]] = true;
            }
        } else {
            for (let i in _active) {
                _active[i] = false;
            }
            _active[filter] = true;
        }

        setFilterActive(_active);
    }

    render() {
        const {filters} = this.props;
        const {available,active} = filters;

        const stops = available.map((filter, i) => {
            return (
                <div className='stops-item' key={i + '_' + filter}>
                    <input
                        id={filter}
                        type='checkbox'
                        checked={!!active[filter]}
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


Stops.propTypes = {
    filters: PropTypes.object.isRequired,
    setFilterActive: PropTypes.func.isRequired

};

export default Stops;