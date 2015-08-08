import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
    static PropTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };

    render() {
        const { increment, decrement, counter } = this.props;
        return (
            <p>
                CLicked: {counter} times.
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        );
    }
}
