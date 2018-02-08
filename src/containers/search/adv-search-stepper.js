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

// import SearchButtonBlock from '../../components/search/search-button-block'
import { priceOptions, modelOptions, makeOptions, typeOptions } from './search-data'
import { extColor, engine, transmission, drive, intColor, trimLevel } from './adv-search-data'
import ManufacturerData from '../../data/manufacturer/carscarscars'
import { stepOptions, filter } from './step-functions'

class AdvSearchStepper extends React.Component {

  state = {
    stepIndex: 0
  };

  handleNext = () => {
    const {stepIndex} = this.state
    switch(stepIndex){
      case 0: this.setState({stepIndex: 1})
              break
      case 1: this.setState({stepIndex: 2})
              break
      case 2: this.setState({stepIndex: 3})
              break
      case 3: this.setState({stepIndex: 4})
              break
      case 4: this.setState({stepIndex: 5})
              break
      case 5: this.setState({stepIndex: 6})
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
      case 4: this.setState({stepIndex: 3})
              break
      case 5: this.setState({stepIndex: 4})
              break
      case 6: this.setState({stepIndex: 5})
              break
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 5 && <RaisedButton
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

    const { handleSubmit } = this.props;

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
                Exterior Color
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(extColor, 'extColor')}</div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 1 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Engine
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(engine, 'engine')}</div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => {this.setState({stepIndex: 2})}}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 2 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Transmission
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(transmission, 'transmission')}</div>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 3 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Drive
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(drive, 'drive')}</div>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 4 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Interior Color
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(intColor, 'intColor')}</div>
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 5})}>
              <div className='custom-step-button'
                   style={this.state.stepIndex === 5 ? null : {color: 'rgba(32, 32, 32, 0.35)'}}>
                Trim Level
              </div>
            </StepButton>
            <StepContent>
              <div>{stepOptions(trimLevel, 'trimLevel')}</div>
              {this.renderStepActions(5)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </Form>
    );
  }
}

AdvSearchStepper = reduxForm({
	form: "advancedSearch",
	destroyOnUnmount: false
}, {}, { formSubmit })(AdvSearchStepper);

const selector = formValueSelector("advancedSearch");
AdvSearchStepper = connect(state => {
	const extColor = selector(state, 'extColor')
	const engine = selector(state, 'engine')
	const drive = selector(state, 'drive')
	const transmission = selector(state, 'transmission')
	const intColor = selector(state, 'intColor')
	const trimLevel = selector(state, 'trimLevel')
	return { extColor, engine, transmission, drive, intColor, trimLevel }
})(AdvSearchStepper);

export default AdvSearchStepper;
