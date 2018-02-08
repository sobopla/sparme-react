import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField, Slider } from "redux-form-material-ui"
import { connect } from "react-redux"
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'

import SearchButtonBlock from '../../components/search/search-button-block'
import OK from '../../components/buttons/OK'
import { priceOptions, modelOptions, makeOptions, typeOptions } from './search-data'
import ManufacturerData from '../../data/manufacturer/carscarscars'
import { stepOptions } from './step-functions'

class SearchStepper extends React.Component {

  state = {
    stepIndex: 0,
    modelOptionsToDisplay: [],
    modelOptionsByType: [],
    errors: {zipcode: null, type: null, make: null}
  };

  filter = (previousValues, filterBy, nextOptions) => {
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

  filterByType = (nextIndex) => {
    if (this.props.types !== undefined && Object.keys(this.props.types).some(k => this.props.types[k])) {
      let modelOptionsByType = this.filter(this.props.types, 'type', modelOptions)
      this.setState({ stepIndex: nextIndex, modelOptionsByType: modelOptionsByType, errors: {type: null} })
    }
    else {
      this.setState({errors: {type: 'Please select a type'}})
    }
  }

  filterByMake = (nextIndex) => {
    if ((this.props.makes !== undefined) && Object.keys(this.props.makes).some(k => this.props.makes[k])) {
      let modelOptionsByMake = this.filter(this.props.makes, 'make', this.state.modelOptionsByType)
      this.setState({stepIndex: nextIndex, modelOptionsToDisplay: modelOptionsByMake, errors: {make: null}})
    }
    else {
      this.setState({errors: {make: 'Please select a make'}})
    }
  }

  handleZip = () => {
    if (this.props.zipcode !== undefined && this.props.zipcode.length > 4) {
      this.setState({stepIndex: 1, errors: {zipcode: null}})
    }
    else {
      this.setState({errors: {zipcode: 'Zipcode must have at least 5 numbers'}})
    }
  }

  // handleStepClick = (index) => {
  //   const {stepIndex} = this.state
  //   switch(index){
  //     case 0: this.setState({stepIndex: 0, modelOptions: modelOptions})
  //             break
  //     case 1:
  //     this.setState({stepIndex: 1, modelOptions: modelOptions})
  //             break
  //     case 2: this.filterByMake()
  //             break
  //   }
  // }

  handleNext = () => {
    const {stepIndex} = this.state
    switch(stepIndex){
      case 0: this.handleZip()
              break
      case 1: this.filterByType(2)
              break
      case 2: this.filterByMake(3)
              break
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state
    switch(stepIndex){
      case 1: this.setState({stepIndex: 0})
              break
      case 2: this.setState({stepIndex: 1})
              break
      case 3: this.setState({stepIndex: 2})
              break
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 3 && <RaisedButton
          backgroundColor="#85d0d4"
          label="Next"
          disableTouchRipple={false}
          disableFocusRipple={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />}
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={false}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    const { zipcode, types, makes, models, prices, handleSubmit } = this.props;

    return (
      <Form onSubmit={()=>handleSubmit(this.props.formSubmit)}>
      <div style={{maxWidth: '90vw', margin: 'auto'}}>
        <Stepper
          className='custom-stepper'
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 0 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Zipcode
              </div>
            </StepButton>
            <StepContent>
              <Field
                key='zipcode'
                name='zipcode'
                label='zipcode'
                component={TextField}
              />
              {this.renderStepActions(0)}
              <div style={{color: '#f16151'}}>{this.state.errors.zipcode}</div>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 1 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Select Vehicle Type
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(typeOptions, 'types')}</div>
              {this.renderStepActions(1)}
              <div style={{color: '#f16151'}}>{this.state.errors.type}</div>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => {this.setState({stepIndex: 2})}}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 2 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Select Make
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(makeOptions, 'makes')}</div>
              {this.renderStepActions(2)}
              <div style={{color: '#f16151'}}>{this.state.errors.make}</div>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 3 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Select Model
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(this.state.modelOptionsToDisplay, 'models')}</div>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
      <SearchButtonBlock />
    </Form>
    );
  }
}
SearchStepper = reduxForm({
	form: "stepSearch",
	destroyOnUnmount: false
}, null, { formSubmit })(SearchStepper);

const selector = formValueSelector("stepSearch");
SearchStepper = connect(state => {
		const zipcode = selector(state, 'zipcode')
		const types = selector(state, 'types')
		const makes = selector(state, 'makes')
		const models = selector(state, 'models')
		const prices = selector(state, 'prices')
		return { zipcode, types, makes, models, prices }
})(SearchStepper);

export default SearchStepper;
