// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    //1. The initial state of Bomb should have a property called secondsLeft.
    //2.The initial value of secondsLeft should be equal to the initialCount 
    //prop of our Bomb component.
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft === 0) {
           return (
               <p>Boom!</p>
           )
        } else {
            return (
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }

    }

}
export default Bomb;