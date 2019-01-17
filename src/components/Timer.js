import React, { Component } from 'react';
import Time from '../utils/format-time';
import '../styles/likeCounter.css';

class Timer extends Component {
    constructor() {
        super();

        this.timeObj = new Time();

        this.state = {
            time: 0,
            started: false,
            paused: false
        };
    }

    handleTimer = () => {
        this.setState(prevState => ({
            started: !prevState.started,
            paused: prevState.started
        }), () => {
            // clearing the interval when the user clicks pause.
            if (this.state.paused) {
                clearInterval(this.interval);
            }

            // Starting the interval..
            if (this.state.started) {
                this.interval = setInterval(() => {
                    // Check for 2 mins.. Max duration is 2 mins.
                    if (this.state.time <= 120000) {
                        this.setState(prevState => ({ time: prevState.time + 10 }));
                    } else {
                        clearInterval(this.interval);
                    }
                }, 10);
            }
        });
    }

    handleReset = () => {
        clearInterval(this.interval);
        this.setState({
            time: 0,
            started: false,
            paused: false
        });
    }

    render() {
        const { time, started } = this.state;

        const startBtnClass = started ? 'btn btn-warning w-100' : 'btn btn-success w-100';
        const playIconToggle = started ? 'fas fa-pause fa-2x' : 'fas fa-play fa-2x';

        return (
            <div className="container">
                <div className="counter-panel border border-secondary rounded">
                    <div className="counter-display align-items-center bg-light text-secondary">
                        <br />
                        <div className="mx-auto display-5">
                            <i className="fas fa-stopwatch fa-4x" />
                        </div>
                        <br />
                        <div className="mx-auto display-4">{this.timeObj.formatedTime(time)}</div>
                    </div>
                    <div className="button-panel d-flex flex-row">
                        <button className={startBtnClass} onClick={this.handleTimer}>
                            <i className={playIconToggle} />
                        </button>
                        <button className="btn w-100" onClick={this.handleReset}>
                            <i className="fas fa-sync-alt fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;