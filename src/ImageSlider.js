// your ImageSlider code here!
import React, {Component} from 'react';

class ImageSlider extends Component {
    //1. Its initial state should have 
    //a property called currentSlideIndex that starts at 0.
    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0
        }
    }

    //2. Bomb countdown!!
    decrement = () => {
        console.log(`before setState: ${this.state.currentSlideIndex}`)

        this.setState({
            currentSlideIndex: this.state.currentSlideIndex - 1
        })

        console.log(`after setState: ${this.state.currentSlideIndex}`)
    }

    render() {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
        )

    }
}

export default ImageSlider;

