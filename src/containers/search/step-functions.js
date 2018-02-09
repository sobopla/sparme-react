import React from 'react'
import { Field } from "redux-form"
import { Checkbox } from "redux-form-material-ui"
import { prices, models, makes, types } from './search-data'

export function stepOptions(options, arrayName){
  let priceRange
  if (options.priceRange) {
    priceRange = options.priceRange
  }
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


export function filter(previousValues, filterBy, nextOptions) {
  let newArray = []
  let keys = Object.keys(previousValues)
  let categoriesToFilter = keys.filter(function(key) {
    return previousValues[key]
  })
  console.log('filter by ' + categoriesToFilter);

  categoriesToFilter.map( category => {
    newArray = [...newArray, nextOptions.filter( option => {
      if (category === option[filterBy]) { return option }
    })]
    }).reduce((a, b) => {return a.concat(b)},[])
  console.log('next options by ' + filterBy + ' ' + JSON.stringify([].concat(...newArray)));
  return [].concat(...newArray)
}
