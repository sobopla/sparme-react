import React from 'react'
import plus from './002-plus.png'
import checked from './001-checked.png'
import { addCharity } from '../../redux/actions/addCharity'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Charity = (props) => {
    return (
      <div className='charity-div'>
        <div className='charity-info charity-sender'>{props.title}</div>
        <div className='charity-info charity-subject'>{props.description}</div>
        <img className='dash-add-image' src={props.added ? checked : plus} onClick={()=>props.addCharity(props.index)}/>

      </div>
    )
}

export default connect(null, {addCharity: addCharity})(Charity)
