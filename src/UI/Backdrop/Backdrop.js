import React, { Component } from 'react'
import Confetti from 'react-confetti'

let confetti = null

class Backdrop extends Component {
  makeConfettiHandler = () => {
    confetti =
        <Confetti
          width='2000px'
          height='2000px'
          numberOfPieces='300'
          top='0px'
          left='0px'
          colors={['#c6dc70',
                  '#99cb57',
                  '#73a641',
                  '#d8eff4',
                  '#85d0d4',
                  '#22a9a3',
                  '#1e847c',
                  '#15514b',
                  '#fbdb96',
                  '#ffcd51',
                  '#f3ebde'
                ]}/>
      return confetti
  }
  render() {


    return this.props.show ?
      <div className='backdrop' onClick={this.props.clicked}>
        {confetti}
      </div> : null
  }

}

export default Backdrop
