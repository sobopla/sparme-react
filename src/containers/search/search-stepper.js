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

/**
 * A basic vertical non-linear implementation
 */

let modelOptionsByType, modelOptionsByMake

class SearchStepper extends React.Component {

  state = {
    stepIndex: 0,
    makeOptions: makeOptions,
    modelOptions: modelOptions,
    errors: {zipcode: null, type: null, make: null}
  };

  filter = (previousValues, filterBy, nextOptions, newArray) => {
    let typesToFilter = Object.keys(previousValues)
    typesToFilter.map( type => {
      nextOptions.map( option => {
        if (type === option[filterBy]) {
          newArray.push(option)
        }
      })
    })
  }

  filterByType = () => {
    if (this.props.types !== undefined && Object.keys(this.props.types).some(k =>  this.props.types[k])) {
      modelOptionsByType = []
      this.filter(this.props.types, 'type', this.state.modelOptions, modelOptionsByType)
      this.setState({ stepIndex: 2, modelOptions: modelOptionsByType, errors: {type: ''} })
    }
    else {
      this.setState({errors: {type: 'Please select a type'}})
    }
  }

  filterByMake = () => {
    if ((this.props.types !== undefined) && (this.props.makes !== undefined)) {
      this.filterByType()
      modelOptionsByMake = []
      this.filter(this.props.makes, 'make', this.state.modelOptions, modelOptionsByMake )
      this.setState({stepIndex: 3, modelOptions: modelOptionsByMake, errors: {make: ''}})
    }
    else {
      this.setState({errors: {make: 'Please select a make'}})
    }
  }

  handleZip = (index) => {
    if (this.props.zipcode !== undefined && this.props.zipcode.length > 4) {
      this.setState({stepIndex: index, errors: {zipcode: null}})
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
      case 1: this.filterByType()
              break
      case 2: this.filterByMake()
              break
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex === 1) {
      let modelOptionsByType = []
      this.filter(this.props.types, 'type', this.state.modelOptions, modelOptionsByType)
      this.setState({ modelOptions: modelOptionsByType })
    }
    if (stepIndex === 2) {
      let modelOptionsByMake = []
      this.filter(this.props.makes, 'make', this.state.modelOptions, modelOptionsByMake )
      this.setState({makes: false, models: true, modelOptions: modelOptionsByMake})
    }
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 3 && <RaisedButton
          backgroundColor="#85d0d4"
          labelColor='#ffffff'
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />}
        {step > 0 && (
          <FlatButton
            label="Back"
            labelColor="#85d0d4"
            disableTouchRipple={true}
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
                style={this.state.stepIndex === 0 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}
                iconStyle={{color: '#22a9a3'}}>
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
              <div>{stepOptions(this.state.modelOptions, 'models')}</div>
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
