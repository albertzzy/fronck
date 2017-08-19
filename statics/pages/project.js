import Header from '../components/header';
import React from 'react';

export default class Project extends React.Component{
	static async getInitialProps({req}){
		return {}

	}


	render(){
		return(
			<Header>this is a Project page</Header>

		)


	}	
	

}