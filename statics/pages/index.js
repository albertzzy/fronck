import React from 'react';
import Header from '../components/header.js'



export default class IndexPage extends React.Component{
	static async getInitialProps({req}){
		return {}
	}


	handleSignIn(){

	}

	handleSignUp(){


	}
	
	componentDidMount(){

	}





	render(){
		return(
			<div>
				<Header>signin</Header>

				<div>
					<p><label htmlFor="email">email/user</label><input type="text" id="email"/></p>
					<p><label htmlFor="password">password</label><input type="text" id="password"/></p>
					<p><button onClick={this.handleSignIn}>signin</button></p>
				</div>


				<Header>signup</Header>

				<div>
					<p><label htmlFor="user">user</label><input type="text" id="user"/></p>
					<p><label htmlFor="email">email</label><input type="text" id="email"/></p>
					<p><label htmlFor="password">password</label><input type="text" id="password"/></p>
					<p><button onClick={this.handleSignUp}>signup</button></p>
				</div>
				

			</div>

		)


	}	
	

}

