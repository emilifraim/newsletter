import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';

class CongratulationComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container mb-3 mt-3 offset-md-3 fade-in">
				<div className="col-md-12 mb-4">
					<div className="custom-h-title">Thank You For Signing up!</div>
				</div>
				<div className="col-md-12 mb-4">
					<div className="custom-h-title-2">Look out for the latest news on your favorite shows</div>
				</div>
			</div>
		);
	}
}

export default CongratulationComponent;
