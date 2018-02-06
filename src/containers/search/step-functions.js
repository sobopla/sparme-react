import React from 'react'
import { Field } from "redux-form"
import { Checkbox } from "redux-form-material-ui"
import { prices, models, makes, types } from './search-data'

export function stepOptions(options, arrayName){
  return options.map(({name, label}, index) =>
        <Field
          style={{display: 'inline-block', width: '170px'}}
          labelStyle={{color: '#202020', fontSize: '20px'}}
          className='field'
          key={index}
          name={`${arrayName}.${name}`}
          label={label}
          component={Checkbox}
        />
      )
    }
