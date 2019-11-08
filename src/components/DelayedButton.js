// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    constructor(props) {
        super(props);
    };

    handleClick = (event) => {
        event.persist();
        setTimeout(
            this.props.onDelayedClick,
            this.props.delay,
            event
        );
    }

    render() {
        return <div><button onClick={this.handleClick}>Delayed</button></div>
    };
};