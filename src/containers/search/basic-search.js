import React from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField, Checkbox } from "redux-form-material-ui"
import { connect } from "react-redux"

let SearchOne = props => {
	const { handleSubmit } = props;

	const prices = [
		{ name: "$", label: "$" },
		{ name: "$$", label: "$$" },
		{ name: "$$$", label: "$$$" },
		{ name: "$$$$", label: "$$$$" }
	];

	let models = [
		{ name: "accord", label: "Accord" },
		{ name: "civic", label: "Civic" },
		{ name: "fit", label: "Fit" },
		{ name: "HR-V", label: "HR-V" },
		{ name: "CR-V", label: "CR-V"}
	];

	let makes = [{ name: "Honda", label: "Honda" }];

	const types = [
		{ name: "car", label: "Car" },
		{ name: "truck", label: "Truck" },
		{ name: "suv", label: "SUV" },
		{ name: "van", label: "Van / Wagon"},
		{ name: "commercial", label: 'Commercial'}
	];

	const renderOptions = options =>
		options.map(({name, label}) => (
			<Field
				style={{display: 'inline-block', width: '170px'}}
				labelStyle={{color: '#202020', fontSize: '20px'}}
				// disabled={true}
				className='field'
				key={name}
				name={name}
				label={label}
				component={Checkbox}
			/>
		));

	const optionsCallback = (modify, value) => {
		console.log(value);
		if (modify.includes(value)) {
			modify = modify.filter(item => {
				console.log(item);
				return item !== value
			})
		} else {
			modify.push(value);
		}
		console.log(modify);
	}

	const renderOptionsWithCallback = (options, modify, callback) =>
		options.map(({ name, label }) => (
			<Field
				key={name}
				name={name}
				label={label}
				component={Checkbox}
				onClick={() => callback(modify, name)}
			/>
		));

	const zipOK = null

	const Okay = () => {
		console.log('keyup');
		this.zipOK = <button>OK</button>
	}

	return (
		<Form>
			<div className='form-section'>
				<div className='form-section-heading'>Zip Code</div>
				<Field
					key='zipcode'
					name='zipcode'
					label='zipcode'
					component={TextField}
					onKeyUp={Okay}
				/>
				{zipOK}
			</div>
			<div className='form-section'>
				<div className='form-section-heading'>Vehicle Type</div>
				<div>{renderOptions(types)}</div>
			</div>
			<div className='form-section'>
				<div className='form-section-heading'>Make</div>
				<div>{renderOptions(makes)}</div>
			</div>
			<div className='form-section'>
				<div className='form-section-heading'>Model</div>
				<div>{renderOptions(models)}</div>
			</div>
			<div className='form-section'>
				<div className='form-section-heading'>Price</div>
				<div>{renderOptions(prices)}</div>
			</div>
		</Form>
	);
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
