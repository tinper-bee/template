import { Component } from 'react';
import { Tile, ProgressBar } from 'tinper-bee';

import './index.less';

export default class ProgressBarDemo extends Component{
    render() {
        return (
            <div className="progress-bar-demo">
                <Tile className="progress-bar-demo-tile">
                    <div className="progress-bar-demo-row">
                        <ProgressBar now = {40} />
                        <ProgressBar active now = {40} />
                        <ProgressBar striped now = {40} />
                        <ProgressBar size="sm">
                            <ProgressBar colors="danger" now = {10} />
                            <ProgressBar colors="success" now = {20} />
                            <ProgressBar colors="warning" now = {30} />
                        </ProgressBar>
                        <ProgressBar active now = {40} label={`${40}%`} />
                    </div>
                </Tile>
            </div>
        )
    }
}