import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField, Checkbox } from "redux-form-material-ui"
import { connect } from "react-redux"
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'

import OK from '../../components/buttons/OK'


//temporary data - can prob remove some of this tomorrow
//and start calling from actual manufacturer data
const extColor = [
	{ name: "Black", label: "Black" },
	{ name: "Red", label: "Red" },
	{ name: "White", label: "White" },
	{ name: "Blue", label: "Blue" }
];

const engine = [
	{ name: "Lorem", label: "Lorem" },
	{ name: "Ipsum", label: "Ipsum" }
];

const transmission = [
	{ name: "Automatic", label: "Automatic" },
	{ name: "Manual", label: "Manual" }
];

const drive = [
	{ name: "Front Wheel Drive", label: "Front Wheel Drive" },
	{ name: "4-Wheel Drive", label: "4-Wheel Drive" }
];

const intColor = [
	{ name: "Tan Leather", label: "Tan Leather" },
	{ name: "Tan Cloth", label: "Tan Cloth" },
	{ name: "Black Leather", label: "Black Leather" }
]

const trimLevel = [
	{ name: "Lorem", label: "Lorem" },
	{ name: "Ipsum", label: "Ipsum" }
]

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
		Events.scrollEvent.register('begin', function(to, element) {console.log("begin", arguments);});
		Events.scrollEvent.register('end', function(to, element) {console.log("end", arguments);});
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		const { handleSubmit, zipcode } = this.props;

		//function called to scroll down the page to next form field
		//will adjust this to take the height of the form field as a parameter
		const scrollMore = () => {
    	scroll.scrollMore(250);
  	}

		//sets the next active form field on the state
		const nextFieldHandler = (fieldName) => {
			scrollMore()
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

		//returns the state for the form field to pass into field props
		//used for label styling and enabling/disabling checkboxes
		const labelName = (options) => {
			switch(options){
				case extColor: return this.state.extColor
				case engine: return this.state.engine
				case transmission: return this.state.transmission
				case drive: return this.state.drive
				case intColor: return this.state.intColor
				case trimLevel: return this.state.trimLevel
			}
		}

		//the following 3 functions were set up by randal
		//going to get into the callback functionality more tomorrow for
		//rendering based on a previous selection
		const renderOptions = options =>
			options.map(({name, label}) => (
				<Field
					style={{display: 'inline-block', width: '170px'}}
					//renders label style according to active state of the field
					labelStyle={labelName(options) === true ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
					disabled={!labelName(options)}
					className='field'
					key={name}
					name={name}
					label={label}
					component={Checkbox}
				/>
			));

		const optionsCallback = (modify, value) => {
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

		const renderOptionsWithCallback = (options, modify, callback) =>
			options.map(({ name, label, index }) => (
				<Field
					key={index}
					name={name}
					label={label}
					style={{display: 'inline-block', width: '170px'}}
					labelStyle={labelName(options) === true ? {color: '#202020', fontSize: '20px'} : {color: '#ccc', fontSize: '20px'}}
					disabled={!labelName(options)}
					className='field'
					component={Checkbox}
					onClick={() => callback(modify, name)}
				/>
			));

		const okButtonHandler = (fieldName) => {
			switch(fieldName){
				case 'extColor': this.setState({extColorOK: true})
										break
				case 'engine': this.setState({engineOK: true})
										break
				case 'transmission': this.setState({transmissionOK: true})
										break
				case 'drive': this.setState({driveOK: true})
										break
				case 'intColor': this.setState({intColorOK: true})
										break
				case 'trimLevel': this.setState({trimLevelOK: true})
										break
			}
		}

		return (
			<div>
			<Form onSubmit={()=>handleSubmit(this.props.formSubmit)}>
				<div className={this.state.extColor === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading' >Exterior Color</div>
					<div>{renderOptions(extColor)}</div>
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
					<div>{renderOptions(engine)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('transmission')}>OK</div>
				</div>
				<div className={this.state.transmission === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Transmission</div>
					<div>{renderOptions(transmission)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('drive')}>OK</div>
				</div>
				<div className={this.state.drive === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Drive</div>
					<div>{renderOptions(drive)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('intColor')}>OK</div>
				</div>
				<div className={this.state.intColor === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Interior Color</div>
					<div>{renderOptions(intColor)}</div>
					<div className='OK' onClick={()=>nextFieldHandler('trimLevel')}>OK</div>
				</div>
				<div className={this.state.trimLevel === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Trim Level</div>
					<div>{renderOptions(trimLevel)}</div>
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
	form: "advanced-search"
})(AdvSearchForm);

const selector = formValueSelector("contact");
AdvSearchForm = connect(state => {
	const zipcode = selector(state, 'zipcode')
	return zipcode
}, null, formSubmit)(AdvSearchForm);

export default AdvSearchForm;
