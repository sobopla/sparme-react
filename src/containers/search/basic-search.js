import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField, Checkbox } from "redux-form-material-ui"
import { connect } from "react-redux"
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'

import SearchButtonBlock from '../../components/search/search-button-block'
import OK from '../../components/buttons/OK'


//temporary data - can prob remove some of this tomorrow
//and start calling from actual manufacturer data
const prices = [
	{ name: "$", label: "$" },
	{ name: "$$", label: "$$" },
	{ name: "$$$", label: "$$$" },
	{ name: "$$$$", label: "$$$$" }
];

let models = [
	{ make: 'Honda', name: "Accord", label: "Accord", type: 'car' },
	{ make: 'Honda', name: "Civic", label: "Civic", type: 'car' },
	{ make: 'Honda', name: "Fit", label: "Fit", type: 'car' },
	{ make: 'Honda', name: "HR-V", label: "HR-V", type: 'suv' },
	{ make: 'Honda', name: "CR-V", label: "CR-V", type: 'car'},
	{ make: 'Ford', name: 'Explorer', label: 'Explorer', type: 'truck'},
	{ make: 'Ford', name: 'Fiesta', label: 'Fiesta', type: 'car'},
	{ make: 'Ford', name: 'Ranger', label: 'Ranger', type: 'truck'}
];

let makes = [
	{ name: "Honda", label: "Honda" },
	{ name: "Ford", label: "Ford" },
	{ name: "Toyota", label: "Toyota" },
	{ name: "Chevrolet", label: "Chevrolet" },
	{ name: "Nissan", label: "Nissan" }
];

const types = [
	{ name: "car", label: "Car" },
	{ name: "truck", label: "Truck" },
	{ name: "suv", label: "SUV" },
	{ name: "van", label: "Van / Wagon"},
	{ name: "commercial", label: 'Commercial'}
];

class SearchOne extends Component {
	constructor(props) {
    super(props);

		//state shows the active form field
    this.state = {
			zip: true,
			types: false,
			makes: false,
			models: false,
			prices: false,
			zipOK: false,
			typeOK: false,
			makeOK: false,
			modelOK: false,
			priceOK: false
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
				case 'type': this.setState({zip: false, types: true})
										break
				case 'make': this.setState({types: false, makes: true})
										break
				case 'model': this.setState({makes: false, models: true})
										break
				case 'price': this.setState({models: false, prices: true})
										break
			}

		}

		//returns the state for the form field to pass into field props
		//used for label styling and enabling/disabling checkboxes
		const labelName = (options) => {
			switch(options){
				case types: return this.state.types
				case makes: return this.state.makes
				case models: return this.state.models
				case prices: return this.state.prices
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
				case 'zip': this.setState({zipOK: true})
										break
				case 'type': this.setState({typeOK: true})
										break
				case 'make': this.setState({makeOK: true})
										break
				case 'model': this.setState({modelOK: true})
										break
				case 'price': this.setState({priceOK: true})
										break
			}
		}

		return (
			<div>
			<Form onSubmit={()=>handleSubmit(this.props.formSubmit)}>
				<div className={this.state.zip === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading' >Zip Code</div>
					<Field
						ref='zipcode'
						key='zipcode'
						name='zipcode'
						label='zipcode'
						component={TextField}
						onChange={()=>{okButtonHandler('zip')}}
					/>
						{/* OK Button currently activates and scrolls to next field,
							still needs to process input and update options for next field,
							might refactor to OK button component */}
						<div
							className='OK'
							style={{
	              transform: this.state.zipOK ? 'translateX(0)' :'translateX(-20px)',
	              opacity: this.state.zipOK ? '1' : '0'
	            }}
							onClick={()=>nextFieldHandler('type')}>OK</div>
				</div>
				<div className={this.state.types === true ? 'form-section active' : 'form-section'} name='field-type'>
					<div className='form-section-heading'>Vehicle Type</div>
					<div>{renderOptionsWithCallback(types, makes, optionsCallback)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('make')}>OK</div>
				</div>
				<div className={this.state.makes === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Make</div>
					<div>{renderOptions(makes)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('model')}>OK</div>
				</div>
				<div className={this.state.models === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Model</div>
					<div>{renderOptions(models)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('price')}>OK</div>
				</div>
				<div className={this.state.prices === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Price</div>
					<div>{renderOptions(prices)}</div>
					<div className='OK' type='submit'>Submit</div>
				</div>
			</Form>
			<SearchButtonBlock />
		</div>
		);
	}
};

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

SearchOne = reduxForm({
	form: "contact"
})(SearchOne);

const selector = formValueSelector("contact");
SearchOne = connect(state => {
	const zipcode = selector(state, 'zipcode')
	return zipcode
}, null, formSubmit)(SearchOne);

export default SearchOne;
