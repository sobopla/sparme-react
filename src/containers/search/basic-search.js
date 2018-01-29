import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField, Checkbox } from "redux-form-material-ui"
import { connect } from "react-redux"
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import OK from '../../components/buttons/OK'

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
	//React scroll functionality
	componentDidMount(){
		Events.scrollEvent.register('begin', function(to, element) {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function(to, element) {
			console.log("end", arguments);
		});

		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		const { handleSubmit } = this.props;

		const scrollMore = () => {
    	scroll.scrollMore(100);
  	}

	 	let classes = {
			zip: 'form-section active',
			type: 'form-section',
			make: 'form-section',
			model: 'form-section',
			price: 'form-section'
		}

		const nextFieldHandler = fieldName => {
			// classes = Object.keys(classes).map(key => {
			// 	return {key: 'form-section'}
			// })
			classes.fieldName = 'form-section active'
		}

		const renderOptions = options =>
			options.map(({name, label}) => (
				<Field
					style={{display: 'inline-block', width: '170px'}}
					labelStyle={{color: 'rgba(32, 32, 32, 0.35)', fontSize: '20px'}}
					// disabled={true}
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
					labelStyle={{color: 'rgba(32, 32, 32, 0.35)', fontSize: '20px'}}
					disabled={false}
					className='field'
					component={Checkbox}
					onClick={() => callback(modify, name)}
				/>
			));

		// const zipOK = null
    //
		// const Okay = () => {
		// 	console.log('keyup');
		// 	this.zipOK = <button>OK</button>
		// }
		const zipHandler = () => {
			console.log(this.refs.zipcode);
		}

		return (
			<Form>
				<div className={classes.zip}>
					<div className='form-section-heading' >Zip Code</div>
					<Field
						ref='zipcode'
						key='zipcode'
						name='zipcode'
						label='zipcode'
						component={TextField}
						// onKeyUp={Okay}
					/>
						<div className='OK' onClick={nextFieldHandler('type')}>OK</div>
				</div>
				<div className={classes.type} name='field-type'>
					<div className='form-section-heading'>Vehicle Type</div>
					<div>{renderOptionsWithCallback(types, makes, optionsCallback)}</div>
					<div className='OK' >OK</div>
				</div>
				<div className='form-section'>
					<div className='form-section-heading'>Make</div>
					<div>{renderOptions(makes)}</div>
					<div className='OK' >OK</div>
				</div>
				<div className='form-section'>
					<div className='form-section-heading'>Model</div>
					<div>{renderOptions(models)}</div>
					<div className='OK' >OK</div>
				</div>
				<div className='form-section'>
					<div className='form-section-heading'>Price</div>
					<div>{renderOptions(prices)}</div>
					<div className='OK' >OK</div>
				</div>
			</Form>
		);
	}
};

SearchOne = reduxForm({
	form: "contact"
})(SearchOne);

const selector = formValueSelector("contact");
SearchOne = connect(state => {
	const isUser = selector(state, "username");
	return {
		isUser
	};
})(SearchOne);

export default SearchOne;
