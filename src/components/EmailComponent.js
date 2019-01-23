import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class EmailComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { email, errorEmail, handleNext, onChange, checked, errorChecked, handleCheck } = this.props;
		return (
			<div className="row mt-4 offset-md-3 fade-in">
				<form className="" onSubmit={handleNext}>
					<div className="row">
						<div className="col-md-12 col-sm-12 ">
							<div className="custom-h-title mb-3">SIGN UP FOR THE TLC NEWSLETTER.</div>
						</div>
						<div className="col-md-6 col-sm-8 ">
							<TextFieldGroup
								placeholder="enter email address"
								name="email"
								type="text"
								value={email}
								onChange={onChange}
								error={errorEmail}
							/>
						</div>

						<div className="col-md-6 col-sm-2 ">
							<input className="btn custom-btn mb-4  btn-sm-block" type="submit" value="NEXT" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-10 mb-4">
							<div className="form-check">
								<input
									className={classnames('form-check-input', {
										'is-invalid': errorChecked
									})}
									type="checkbox"
									onChange={handleCheck}
									defaultChecked={checked}
								/>
								<div className="custom-privacy-policy">
									I agree to receive information from discovery Communication in accordance with the
									following Privacy Policy
								</div>
								{errorChecked && <div className="invalid-feedback">{errorChecked}</div>}
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

EmailComponent.propTypes = {
	email: PropTypes.string.isRequired,
	errorEmail: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	errorChecked: PropTypes.string,
	handleCheck: PropTypes.func.isRequired,
	handleNext: PropTypes.func.isRequired
};

export default EmailComponent;
