import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';
import PropTypes from 'prop-types';

class FirstLastNameComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { firstName, errorFirstName, lastName, errorLastName, handleSubmit, onChange } = this.props;
		return (
			<div className="container mt-4 offset-md-3 fade-in">
				<form className="" onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-md-12 col-sm-12 ">
							<div className="custom-h-title-2 mb-3">
								ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
							</div>
						</div>
						<div className="col-md-3 col-sm-4 ">
							<TextFieldGroup
								placeholder="First Name"
								name="firstName"
								type="text"
								value={firstName}
								onChange={onChange}
								error={errorFirstName}
							/>
						</div>

						<div className="col-md-3 col-sm-4 ">
							<TextFieldGroup
								placeholder="Last Name"
								name="lastName"
								type="text"
								value={lastName}
								onChange={onChange}
								error={errorLastName}
							/>
						</div>

						<div className="col-md-4 col-sm-2 ">
							<input className="btn custom-btn mb-4  btn-sm-block" type="submit" value="SIGN UP" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

FirstLastNameComponent.propTypes = {
	firstName: PropTypes.string.isRequired,
	errorFirstName: PropTypes.string,
	lastName: PropTypes.bool.isRequired,
	errorLastName: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default FirstLastNameComponent;
