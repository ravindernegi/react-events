import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super();
        this.state = { is_round: false };
    }

    round = (val) => {
        this.setState({ is_round: true })
        console.log('Round', val)
    }

    reset = () => {
        this.setState({ is_round: false });
    }

    render() {
        return (
            <div align="center">
                <h1>Class Component</h1>
                <div style={{ width: '200px', height: '200px', background: '#E74292', margin: '50px', borderRadius: (this.state.is_round) ? '50%' : 0 }}></div>
                <div style={{ margin: '50px' }}>
                    <button onClick={() => this.round('test')}>Round</button> <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}
export default ClassComponent;
