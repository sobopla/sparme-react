import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { formSubmissionHandler as formSubmit } from '../../redux/actions/formSubmit'
import axios from 'axios-es6'


class SearchButton extends Component {

	handleSubmit = () => {
		let req = axios.post("http://localhost:9000", this.props.form['stepSearch']['values']).then((response) => {
			console.log(response)
	}).catch((error) => {
			console.log(error)
	})
		// this.props.formSubmit(this.props.form)
	}

	render() {
		return (
			<NavLink to='/search-results'>
        <button
          className='basic-button green2-border' onClick={this.handleSubmit}
          >MAKE DONATION
        </button>
      </NavLink>
		)}
}

function mapStateToProps(state) {
  return {
		results: state.results,
		form: state.form,
		values: state.values
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({formSubmit: formSubmit}, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(SearchButton)
