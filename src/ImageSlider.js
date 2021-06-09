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


    render() {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
        )

    }
}

export default ImageSlider;

