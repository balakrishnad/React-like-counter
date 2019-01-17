import React, { Component } from 'react';
import '../styles/likeCounter.css';

class LikeCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    handleUpDown = (e, upDown) => {
        this.setState(prevState => ({ count: prevState.count + upDown }));
    }

    // to reset the counter to 0...
    handleReset = () => {
        this.setState({ count: 0 });
    }

    render() {
        const { count } = this.state;

        return (
            <div className="container">
                <div className="counter-panel border border-secondary rounded">
                    <div className="counter-display d-flex align-items-center bg-light text-secondary">
                        <div className="mx-auto display-1">{count}</div>
                    </div>
                    <div className="button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={e => this.handleUpDown(e, 1)}>
                            <i className="far fa-thumbs-up fa-2x" />
                        </button>
                        <button className="btn w-100" onClick={this.handleReset}>
                            <i className="fas fa-sync-alt fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100"
                            onClick={e => this.handleUpDown(e, -1)}
                            disabled={count === 0}
                        >
                            <i className="far fa-thumbs-down fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LikeCounter;
