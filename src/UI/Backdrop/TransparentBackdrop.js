//backdrop to appear behind modal

import React from 'react'

const TransparentBackdrop = (props) => {
    return props.show ?
      <div
        className='backdrop transparent-background'
        onClick={props.clicked}>
      </div> : null
  }

export default TransparentBackdrop
