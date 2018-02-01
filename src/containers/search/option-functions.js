import React from 'react'
import { Field } from "redux-form"
import { Checkbox } from "redux-form-material-ui"
import { prices, models, makes, types } from './search-data'

//the following 3 functions were set up by randal
//going to get into the callback functionality more tomorrow for
//rendering based on a previous selection
export function renderOptions(options, fieldActive){
  return options.map(({name, label}) => (
    <Field
      style={{display: 'inline-block', width: '170px'}}
      //renders label style according to active state of the field
      labelStyle={fieldActive === true ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
      disabled={!fieldActive}
      className='field'
      key={name}
      name={name}
      label={label}
      component={Checkbox}
    />
  ))
}

export function optionsCallback(modify, value) {
  console.log('value ' + value);
  if (modify.includes(value)) {
    modify = modify.filter(item => {
      console.log('item ' + item);
      return item !== value
    })
  } else {
    modify.push(value);
  }
  console.log(modify);
}

export function renderOptionsWithCallback (options, modify, callback, fieldActive){
  return options.map(({ name, label, index }) => (
    <Field
      key={index}
      name={name}
      label={label}
      style={{display: 'inline-block', width: '170px'}}
      labelStyle={fieldActive === true ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
      disabled={!fieldActive}
      className='field'
      component={Checkbox}
      onClick={() => callback(modify, name)}
    />
  ));
}
