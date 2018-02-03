import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { Checkbox } from "redux-form-material-ui"
import { connect } from "react-redux"
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'

// import OK from '../../components/buttons/OK'
import { extColor, engine, transmission, drive, intColor, trimLevel } from './adv-search-data'
import { renderOptions, optionsCallback, renderOptionsWithCallback } from './option-functions'


class AdvSearchForm extends Component {
	constructor(props) {
    super(props);

		//state shows the active form field
    this.state = {
			extColor: true,
			engine: false,
			transmission: false,
			drive: false,
			intColor: false,
			trimLevel: false,
			extColorOK: false,
			engineOK: false,
			transmissionOK: false,
			driveOK: false,
			intColorOK: false,
			trimLevelOK: false
    };
  }
	//React scroll functionality
	componentDidMount(){
		Events.scrollEvent.register('begin');
		Events.scrollEvent.register('end');
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		const { handleSubmit } = this.props;

		//sets the next active form field on the state
		const nextFieldHandler = (fieldName) => {
			scroll.scrollMore(200)
			switch(fieldName){
				case 'engine': this.setState({extColor: false, engine: true})
										break
				case 'transmission': this.setState({engine: false, transmission: true})
										break
				case 'drive': this.setState({transmission: false, drive: true})
										break
				case 'intColor': this.setState({drive: false, intColor: true})
										break
				case 'trimLevel': this.setState({intColor: false, trimLevel: true})
										break
			}

		}

		return (
			<div>
			<Form onSubmit={()=>handleSubmit(this.props.formSubmit)}>
				<div className={this.state.extColor === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading' >Exterior Color</div>
					<div>{renderOptions(extColor, 'extColor', this.state.extColor)}</div>
						{/* OK Button currently activates and scrolls to next field,
							still needs to process input and update options for next field,
							might refactor to OK button component */}
						<div
							className='OK'
							// style={{
	            //   transform: this.state.zipOK ? 'translateX(0)' :'translateX(-20px)',
	            //   opacity: this.state.zipOK ? '1' : '0'
	            // }}
							onClick={()=>nextFieldHandler('engine')}>OK</div>
				</div>
				<div className={this.state.engine === true ? 'form-section active' : 'form-section'} name='field-type'>
					<div className='form-section-heading'>Engine</div>
					<div>{renderOptions(engine, 'engine', this.state.engine)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('transmission')}>OK</div>
				</div>
				<div className={this.state.transmission === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Transmission</div>
					<div>{renderOptions(transmission, 'transmission', this.state.transmission)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('drive')}>OK</div>
				</div>
				<div className={this.state.drive === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Drive</div>
					<div>{renderOptions(drive, 'drive', this.state.drive)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('intColor')}>OK</div>
				</div>
				<div className={this.state.intColor === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Interior Color</div>
					<div>{renderOptions(intColor, 'intColor', this.state.intColor)}</div>
					<div className='OK' onClick={()=>nextFieldHandler('trimLevel')}>OK</div>
				</div>
				<div className={this.state.trimLevel === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Trim Level</div>
					<div>{renderOptions(trimLevel, 'trimLevel', this.state.trimLevel)}</div>
					<div className='OK' type='submit'>OK</div>
				</div>
			</Form>
		</div>
		);
	}
};

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

AdvSearchForm = reduxForm({
	form: "advancedSearch",
	destroyOnUnmount: false
}, {}, { formSubmit })(AdvSearchForm);

const selector = formValueSelector("advancedSearch");
AdvSearchForm = connect(state => {
	const extColor = selector(state, 'extColor')
	const engine = selector(state, 'engine')
	const drive = selector(state, 'drive')
	const transmission = selector(state, 'transmission')
	const intColor = selector(state, 'intColor')
	const trimLevel = selector(state, 'trimLevel')
	return { extColor, engine, transmission, drive, intColor, trimLevel }
})(AdvSearchForm);

export default AdvSearchForm;
