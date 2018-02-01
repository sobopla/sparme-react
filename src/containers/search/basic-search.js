import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, Form } from "redux-form"
import { TextField } from "redux-form-material-ui"
import { connect } from "react-redux"
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'

import SearchButtonBlock from '../../components/search/search-button-block'
import OK from '../../components/buttons/OK'
import { prices, models, makes, types } from './search-data'
import { renderOptions, optionsCallback, renderOptionsWithCallback } from './option-functions'

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
		Events.scrollEvent.register('begin');
		Events.scrollEvent.register('end');
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		const { zipcode, handleSubmit } = this.props;

		//sets the next active form field on the state
		const nextFieldHandler = (fieldName) => {
			console.log('zip now' + this.props.zipcode);
			scroll.scrollMore(200)
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

		return (
			<div>
			<Form onSubmit={()=>handleSubmit(this.props.formSubmit)}>
				<div className={this.state.zip === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading' >Zip Code</div>
					<Field
						key='zipcode'
						name='zipcode'
						label='zipcode'
						component={TextField}
						onChange={()=>{this.setState({zipOK: true})}}
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
					<div>{renderOptions(types, 'types', this.state.types)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('make')}>OK</div>
				</div>
				<div className={this.state.makes === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Make</div>
					<div>{renderOptions(makes, 'makes', this.state.makes)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('model')}>OK</div>
				</div>
				<div className={this.state.models === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Model</div>
					<div>{renderOptions(models, 'models', this.state.models)}</div>
					<div className='OK'  onClick={()=>nextFieldHandler('price')}>OK</div>
				</div>
				<div className={this.state.prices === true ? 'form-section active' : 'form-section'}>
					<div className='form-section-heading'>Price</div>
					<div>{renderOptions(prices, 'prices', this.state.prices)}</div>
					<div className='OK'>OK</div>
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
	form: "basicSearch",
	destroyOnUnmount: false
}, null, { formSubmit })(SearchOne);

const selector = formValueSelector("basicSearch");
SearchOne = connect(state => {
		const zipcode = selector(state, 'zipcode')
		return zipcode
})(SearchOne);

export default SearchOne;
