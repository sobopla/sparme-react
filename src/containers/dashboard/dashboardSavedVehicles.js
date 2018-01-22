import React, { Component } from 'react'
import DashboardSavedVehicle from '../../components/dashboard/dashboardSavedVehicle'
import LeftArrow from '../../components/buttons/left-arrow.js'
import RightArrow from '../../components/buttons/right-arrow.js'

//placeholder for saved vehicles data
const savedVehiclesArray = [
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$14,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$15,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$16,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$14,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$15,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$16,000'
  }
]

// const savedVehiclesList = savedVehiclesArray.map((vehicle, index) => {
//   return <DashboardSavedVehicle
//     key={index}
//     image={vehicle.image}
//     price={vehicle.price} />
// })

class DashboardSavedVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      slides: savedVehiclesArray
    };
  }

  goToPrevSlide = (e) => {
    e.preventDefault();
    let index = this.state.activeIndex;
    let transform = "";

    if (index < 0) {
      ++index;
    }
    if (index >= -2) {
      // index
    }
    this.refs.slideWrap.style.transform = "translateX(" + index * 300 + "px)";
    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide = (e) => {
    e.preventDefault();
    let index = this.state.activeIndex;
    let transform = "";
    if (index >= -2) {
      --index;
    } else {
      // index
    }
    this.refs.slideWrap.style.transform = "translateX(" + index * 350 + "px)";
    this.setState({
      activeIndex: index
    });
  }

  render(){
    return (
      <div className='dash-saved-vehicles-wrapper'>
        <div className='dash-saved-vehicles-header'>Saved Vehicles </div>
        <div className='carousel-wrapper'>
          <span className='arrows flex-center'>
            <LeftArrow onClick={e => this.goToPrevSlide(e)} />
          </span>

          <div className='carousel'>
            <div ref="slideWrap" className='carousel-slides'>
              {this.state.slides.map((slide, index) => (
                <DashboardSavedVehicle
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  slide={this.state.slides[index]}
                  image={slide.image}
                  price={slide.price}
                />
            ))}
            </div>
          </div>
          <div className="arrows flex-center">
            <RightArrow onClick={e => this.goToNextSlide(e)} />
          </div>
        </div>
        </div>

    )
  }

}

export default DashboardSavedVehicles
