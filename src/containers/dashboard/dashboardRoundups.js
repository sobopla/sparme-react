import React, { Component } from 'react'
import DashboardRoundup from '../../components/dashboard/dashboardRoundup.js'
import LeftArrow from '../../components/buttons/left-arrow.js'
import RightArrow from '../../components/buttons/right-arrow.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoundup } from '../../redux/actions/addRoundup'
import { updateDonation } from '../../redux/actions/updateDonation'
import { makeDonation } from '../../redux/actions/makeDonation'

class DashboardRoundups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      slides: this.props.roundup // this is the redux stat that holds ALL our roundup data that has been initialized (ideally from the API)
    };
  }

  addDonation = (index) => {

    if (this.props.roundup[index].added == false){
        this.props.addRoundup(index)
        var new_amount = parseFloat(this.props.roundup[index].roundup.replace('$', '')) + parseFloat(this.props.donation.current_investment.replace('$',''))
        if ( new_amount >= 5.0 )
          {
            this.props.makeDonation('$5.00')
            new_amount -= 5.0
          }
        this.props.updateDonation('$'+new_amount)

        this.setState({
          slides:this.props.roundup
        })
    }

  }

  render(){
    return (
      <div className='dash-transactions-wrapper'>
        <div className='dash-header'>Roundups </div>
        <div className='dash-carousel-wrapper'>
                {this.state.slides.map((slide, index) => (
                  <DashboardRoundup
                    key={index}
                    index={index}
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

    )
  }

}

function mapStateToProps(state){
  return { roundup: state.roundup, donation: state.donation }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRoundup: addRoundup, updateDonation: updateDonation, makeDonation: makeDonation}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoundups)
