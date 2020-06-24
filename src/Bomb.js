// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    secondsDecrement = () => {
        let seconds = this.state.secondsLeft
        this.setState({ secondsLeft: seconds - 1 })
    }

    render() {
        { this.state.secondsLeft > 0 ? setTimeout(this.secondsDecrement, 1000) : null }
        return (
            <div>{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</div>
        )
    }
}