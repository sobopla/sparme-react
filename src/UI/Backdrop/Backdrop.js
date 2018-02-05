//backdrop to appear behind modal

import React, { Component } from 'react'

class Backdrop extends Component {
  render() {

    let classes = this.props.transparent ? 'backdrop transparent' : 'backdrop blue-gradient'

    return this.props.show ?
      <div
        className={classes}
        onClick={this.props.clicked}>
      </div> : null
  }

}

export default Backdrop
