import React, { Component } from 'react'
import DashboardRoundup from '../../components/dashboard/dashboardRoundup.js'
import LeftArrow from '../../components/buttons/left-arrow.js'
import RightArrow from '../../components/buttons/right-arrow.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoundup } from '../../redux/actions/addRoundup'
// const savedVehiclesList = savedVehiclesArray.map((vehicle, index) => {
//   return <DashboardSavedVehicle
//     key={index}
//     image={vehicle.image}
//     price={vehicle.price} />
// })

class DashboardRoundups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      slides: this.props.roundup // this is the redux stat that holds ALL our roundup data that has been initialized (ideally from the API)
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

  addDonation = (index) => {
    this.props.addRoundup(index)
    this.setState({
      slides: this.props.roundup
    })

  }

  render(){
    return (
      <div className='dash-saved-roundups-wrapper'>
        <div className='dash-header'>Roundups </div>
        <div className='carousel-wrapper'>
            <span className='arrows flex-center'>
              <LeftArrow onClick={e => this.goToPrevSlide(e)} />
            </span>

            <div className='carousel'>
              <div ref="slideWrap" className='carousel-slides'>
                {this.state.slides.map((slide, index) => (
                  <DashboardRoundup
                    key={index}
                    index={index}
                    activeIndex={this.state.activeIndex}
                    slide={this.state.slides[index]}
                    image={slide.image}
                    roundup={slide.roundup}
                    paid={slide.paid}
                    date={slide.date}
                    storename={slide.storename}
                    added = {slide.added}
                    add = {this.addDonation}
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

function mapStateToProps(state){
  return { roundup: state.roundup }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRoundup: addRoundup}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoundups)
