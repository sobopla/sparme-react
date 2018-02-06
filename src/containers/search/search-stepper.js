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
class SearchStepper extends React.Component {

  state = {
    stepIndex: 0,
    makeOptions: makeOptions,
    modelOptions: modelOptions
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

  handleNext = () => {
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
    if (stepIndex < 3) {
      this.setState({stepIndex: stepIndex + 1})
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
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />}
        {step > 0 && (
          <FlatButton
            label="Back"
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
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Zipcode
            </StepButton>
            <StepContent>
              <Field
                key='zipcode'
                name='zipcode'
                label='zipcode'
                component={TextField}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Select Vehicle Type
            </StepButton>
            <StepContent>
              <div>{stepOptions(typeOptions, 'types')}</div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Select Make
            </StepButton>
            <StepContent>
              <div>{stepOptions(makeOptions, 'makes')}</div>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Select Model
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
