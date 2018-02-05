import React, { Component } from 'react';
import Slides from '../../components/accessories/slides'
import AccessorySlide from '../../components/accessories/accessorySlide'

export default class AccessoriesBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      slides: Slides
    };
  }

  render() {
    return (
      <div>
        <ul ref="slideWrap" className="flex-media accessories-wrapper">
          {this.state.slides.map((slide, index) => (
            <AccessorySlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={this.state.slides[index]}
            />
          ))}
        </ul>
      </div>
    );
  }
}
