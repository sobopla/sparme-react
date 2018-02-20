import React, { Component } from 'react';
// import Slides from '../../components/accessories/slides'
import Slides from '../../components/accounts/slides'
// import AccessorySlide from '../../components/accessories/accessorySlide'
import AccountSlide from '../../components/accounts/accountSlide'

export default class AccountsBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      slides: Slides
    };
  }

// THIS WILL CALL BEFORE RENDERING AND DISPATCH REDUX ACTION THAT INITIALIZES INFO ABOUT ACCOUNTS. 
  // componentWillMount(){
  //   this.props.initilizeAccounts();  }
//    

  render() {
    return (
      <div>
        <ul ref="slideWrap" className="flex-media accounts-wrapper">
          {this.state.slides.map((slide, index) => (
            <AccountSlide
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
