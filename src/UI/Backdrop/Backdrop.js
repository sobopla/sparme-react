//backdrop to appear behind modal

import React, { Component } from 'react'
import Confetti from 'react-confetti'

let confetti = null

class Backdrop extends Component {
  render() {

    let classes = this.props.transparent ? 'backdrop transparent' : 'backdrop blue-gradient'

    console.log(classes);

    if (this.props.confetti) {
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
    }


    return this.props.show ?
      <div
        className={classes}
        onClick={this.props.clicked}
        makeConfetti={this.makeConfettiHandler}>
        {confetti}
      </div> : null
  }

}

export default Backdrop
