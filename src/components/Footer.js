import React, { Component } from 'react';
import EmailComponent from './EmailComponent';
import FirstLastNameComponent from './FirstLastNameComponent';
import CongratulationComponent from './CongratulationComponent';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			errorEmail: '',
			checked: false,
			errorChecked: '',
			firstName: '',
			errorFirstName: '',
			lastName: '',
			errorLastName: '',
			toggleEmailComponent: true,
			toggleFirstLastNameComponent: false,
			toggleCongratulationComponent: false
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleCheck = (e) => {
		this.setState({ checked: !this.state.checked });
	};

	handleNext = (e) => {
		e.preventDefault();
		this.setState({
			errorEmail: '',
			errorChecked: ''
		});
		if (!this.isEmpty(this.state.email) && this.ValidateEmail(this.state.email) && this.state.checked) {
			this.setState({
				toggleEmailComponent: false,
				toggleFirstLastNameComponent: true,
				toggleCongratulationComponent: false,
				errorEmail: ''
			});
		} else {
			if (this.isEmpty(this.state.email)) {
				this.setState({ errorEmail: '* Please enter your email' });
			} else if (!this.ValidateEmail(this.state.email)) {
				this.setState({ errorEmail: '* You have entered an invalid email address!' });
			}
			if (this.state.checked === false) this.setState({ errorChecked: '* Please check Privacy Policy' });
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			errorFirstName: '',
			errorLastName: ''
		});
		if (!this.isEmpty(this.state.firstName) && !this.isEmpty(this.state.lastName)) {
			this.setState({
				toggleEmailComponent: false,
				toggleFirstLastNameComponent: false,
				toggleCongratulationComponent: true,
				errorFirstName: '',
				errorLastName: ''
			});
		} else {
			if (this.isEmpty(this.state.firstName)) this.setState({ errorFirstName: '* Please enter your First name' });
			if (this.isEmpty(this.state.lastName)) this.setState({ errorLastName: '* Please enter your Last name' });
		}
	};

	isEmpty = (value) => {
		if (!value.match(/\S/)) {
			return true;
		} else {
			return false;
		}
	};

	ValidateEmail = (email) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		}
		return false;
	};

	render() {
		let content = null;
		if (this.state.toggleEmailComponent) {
			content = (
				<EmailComponent
					email={this.state.email}
					errorEmail={this.state.errorEmail}
					onChange={this.onChange}
					checked={this.state.checked}
					errorChecked={this.state.errorChecked}
					handleCheck={this.handleCheck}
					handleNext={this.handleNext}
				/>
			);
		} else if (this.state.toggleFirstLastNameComponent) {
			content = (
				<FirstLastNameComponent
					firstName={this.state.firstName}
					errorFirstName={this.state.errorFirstName}
					lastName={this.state.lastName}
					errorLastName={this.state.errorLastName}
					onChange={this.onChange}
					handleSubmit={this.handleSubmit}
				/>
			);
		} else if (this.state.toggleCongratulationComponent) {
			content = <CongratulationComponent />;
		} else {
			content = (
				<div className="row">
					<div className="col-md-12 mb-4" />
					<h2>An error occured, please refresh the page and try again </h2>
				</div>
			);
		}
		return (
			<footer className="footer">
				<div className="container">{content}</div>
				<div className="footer-copyright text-center py-3">© 2019 Copyright</div>
			</footer>
		);
	}
}

export default Footer;
