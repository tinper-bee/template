import React, {Component} from 'react';
import {Tile, Rate} from 'tinper-bee';

import './index.less';

export default class RateDemo extends Component {
    state = {
        value: 3
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }
    onHoverChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="rate-demo">
                <Tile className="rate-demo-tile demo-tile">
                    <h3>评分</h3>
                    <div className="rate-demo-row">
                        <Rate onChange={this.handleChange} count={8} onHoverChange={this.onHoverChange}/>
                        <span>{this.state.value}</span>
                    </div>
                </Tile>
            </div>
        )
    }
}