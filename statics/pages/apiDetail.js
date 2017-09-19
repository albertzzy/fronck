import Header from '../components/header';
import React from 'react';

export default class ApiDetail extends React.Component{
	constructor(){
		super();

		this.handleSave = this.handleSave.bind(this);
	}
	
	static async getInitialProps({req}){

		return {}

	}

	handleSave(){
		

	}

	render(){
		return(
			<div>
				<Header>ApiDetail</Header>
				<p></p>
				<textarea></textarea>

				<p><button onClick={this.handleSave}>save</button></p>
			</div>

		)


	}	
	

}