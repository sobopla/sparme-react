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

import SearchButton from './searchButton'
import OK from '../../components/buttons/OK'
import { priceOptions, modelOptions, makeOptions, typeOptions } from './search-data'
import ManufacturerData from '../../data/manufacturer/carscarscars'
import { stepOptions, filter } from './step-functions'

class SearchStepper extends React.Component {

  state = {
    stepIndex: 0,
    modelOptionsToDisplay: [],
    modelOptionsByType: [],
    errors: {zipcode: null, type: null, make: null}
  };

  filterByType = (nextIndex) => {
    if (this.props.types !== undefined && Object.keys(this.props.types).some(k => this.props.types[k])) {
      let modelOptionsByType = filter(this.props.types, 'type', modelOptions)
      this.setState({ stepIndex: nextIndex, modelOptionsByType: modelOptionsByType, errors: {type: null} })
    }
    else {
      this.setState({errors: {type: 'Please select a type'}})
    }
  }

  filterByMake = (nextIndex) => {
    if ((this.props.makes !== undefined) && Object.keys(this.props.makes).some(k => this.props.makes[k])) {
      let modelOptionsByMake = filter(this.props.makes, 'make', this.state.modelOptionsByType)
      this.setState({stepIndex: nextIndex, modelOptionsToDisplay: modelOptionsByMake, errors: {make: null}})
    }
    else {
      this.setState({errors: {make: 'Please select a make'}})
    }
  }

  handleZip = (index) => {
    if (this.props.zipcode !== undefined && this.props.zipcode.length > 4) {
      if (index === 1 || index === 2){
        this.setState({stepIndex: index, errors: {zipcode: null}})
      }
      else if (index === 3){
        this.filterByType(this.state.stepIndex)
        this.filterByMake(index)
      }
    }
    else {
      this.setState({errors: {zipcode: 'Non-profit must have at least 5 numbers'}})
    }
  }

  //called when user clicks step button directly
  handleStepClick = (index) => {
    const {stepIndex} = this.state

    switch(index){
      case 0: this.setState({stepIndex: 0})
              break
      case 1: switch(stepIndex){
                case 0: this.handleZip(1)
                        break
                case 1: break
                case 2: this.setState({stepIndex: index})
                        break
                case 3: this.setState({stepIndex: index})
                        break
              }
              break
      case 2: switch(stepIndex){
                case 0: this.handleZip(2)
                        break
                case 1: this.filterByType(2)
                        break
                case 2: break
                case 3: this.setState({stepIndex: index})
                        break
              }
              break
      case 3: switch(stepIndex){
                case 0: this.handleZip(3)
                        break
                case 1:
                case 2: this.filterByType(stepIndex)
                        //tried a callback for filtering by Make after Type, was glitchy.
                        //can refactor but the timeout works for the moment
                        setTimeout(()=>{if (this.state.errors.type === null) {this.filterByMake(3)}}, 300)
                        break
                case 3: break
              }
              break
      }
    }

  //called when user clicks Next button
  handleNext = () => {
    const {stepIndex} = this.state
    switch(stepIndex){
      case 0: this.handleZip(1)
              break
      case 1: this.filterByType(2)
              break
      case 2: this.filterByMake(3)
              break
    }
  };

  //called when user clicks Back button
  handlePrev = () => { this.setState({stepIndex: this.state.stepIndex - 1}) }

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
            <StepButton onClick={() => this.handleStepClick(0)}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 0 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Non-profit
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
            <StepButton onClick={() => this.handleStepClick(1)}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 1 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Amount
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(typeOptions, 'types')}</div>
              {this.renderStepActions(1)}
              <div style={{color: '#f16151'}}>{this.state.errors.type}</div>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.handleStepClick(2)}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 2 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Date
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(makeOptions, 'makes')}</div>
              {this.renderStepActions(2)}
              <div style={{color: '#f16151'}}>{this.state.errors.make}</div>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.handleStepClick(3)}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 3 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                From Account
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(this.state.modelOptionsToDisplay, 'models')}</div>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
      <div className='search-button-block flex-media'>
        <SearchButton />
      </div>
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
