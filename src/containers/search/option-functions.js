import React from 'react'
import { Field } from "redux-form"
import { Checkbox } from "redux-form-material-ui"
import { prices, models, makes, types } from './search-data'

export function renderOptions(options, arrayName, fieldActive){
  return options.map(({name, label}, index) =>
        <Field
          style={{display: 'inline-block', width: '170px'}}
          labelStyle={fieldActive ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
          disabled={!fieldActive}
          className='field'
          key={index}
          name={`${arrayName}.${name}`}
          label={label}
          component={Checkbox}
        />
      )
    }

//old functions set up by randal, not using them at the moment


// export function optionsCallback(modify, value) {
//   if (modify.includes(value)) {
//     modify = modify.filter(item => {
//       return item !== value
//     })
//   } else {
//     modify.push(value);
//   }
//   console.log(modify);
// }
//
// export function renderOptionsWithCallback (options, modify, callback, fieldActive){
//   return options.map(({ name, label }, index) => (
//     <Field
//       key={index}
//       name={name}
//       label={label}
//       style={{display: 'inline-block', width: '170px'}}
//       labelStyle={fieldActive ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
//       disabled={!fieldActive}
//       className='field'
//       component={Checkbox}
//       onClick={() => callback(modify, name)}
//     />
//   ));
// }
