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
				<p><label>url:</label><span></span></p>
				<p><label>desc:</label></p>
				<div></div>

				<textarea></textarea>

				<p><button onClick={this.handleSave}>save</button></p>
			</div>

		)


	}	
	

}