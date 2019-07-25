import React from 'react';
import {connect} from 'react-redux';
import './counter.css';
import {onIncrement, onDecrement} from '../actions/counter';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0
        };
    }
    add() {
        this.props.dispatch(onIncrement());
        // let cnt = this.state.cnt + 1;
        // this.setState({
        //     cnt
        // });
    }
    minus() {
        this.props.dispatch(onDecrement());
        // let cnt = this.state.cnt - 1;
        // this.setState({
        //     cnt
        // });
    }
    render() {
        return (
            <div className="counter-wrap">
                <p className="value">次数：<span>{this.props.cnt}</span></p>
                <button className="btn" onClick={this.add.bind(this)}>+</button>
                <button className="btn" onClick={this.minus.bind(this)}>-</button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        cnt: state.cnt
    }
};

export default connect(mapStateToProps)(Counter);