import React, { Component } from "react";

const Slides = [
  {
    url: "https://s3.amazonaws.com/assets.how2car/images/accessories/aftermarket-leather-3x5.jpg",
    name: "Aftermarket Leather",
    price: "$1300"
  },
  {
    url: "https://s3.amazonaws.com/assets.how2car/images/accessories/aftermarket-wheels-3x5.jpg",
    name: "Aftermarket Wheels",
    price: "$1300"
  },
  {
    url: "https://s3.amazonaws.com/assets.how2car/images/accessories/cargomat-3x5.jpg",
    name: "Cargo Mat",
    price: "$95"
  },
  {
    url: "https://s3.amazonaws.com/assets.how2car/images/accessories/floormats-3x5.jpg",
    name: "Floor Mats",
    price: "$195"
  },
  {
    url: "https://s3.amazonaws.com/assets.how2car/images/accessories/pinstripe-3x5.jpg",
    name: "Pinstripe",
    price: "$75"
  },
  {
    url:"https://s3.amazonaws.com/assets.how2car/images/accessories/window-tinting-3x5.jpg",
    name: "Window Tinting",
    price: "$299"
  }
];


// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <li className="carousel-slide">
        <div className="carousel-slide-div">
          <img src={this.props.slide.url} alt={this.props.slide.name} />
          <h1>{this.props.slide.name}</h1>
          <h2>{this.props.slide.price}</h2>
          <div className='flex-center'><input type="checkbox" /></div>
        </div>
      </li>
    );
  }
}

// Carousel component
export default class AccessoriesCarousel extends Component {
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
        <ul ref="slideWrap" className="flex-media">
          {this.state.slides.map((slide, index) => (
            <CarouselSlide
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
