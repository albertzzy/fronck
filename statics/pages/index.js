import React from 'react';
import Header from '../components/header.js'
import 'whatwg-fetch'


export default class IndexPage extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			name:'',
			email:'',
			password:''
		}
	}

	
	static async getInitialProps({req}){
		return {}
	}

	handleName(e){
		this.setState({
			name:e.target.value
		})
	}

	handleEmail(e){
		this.setState({
			email:e.target.value
		})
	}

	handlePassword(e){
		this.setState({
			password:e.target.value
		})
	}


	handleSignIn(){
		
	}

	handleSignUp(){
		let {name,email,password} = this.state;

		fetch('/signup',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password
			})
		}).then((res)=>{

			console.log(res);
		})

	}
	
	componentDidMount(){

	}





	render(){
		return(
			<div>
				<Header>signin</Header>

				<div>
					<p><label htmlFor="email">email/user</label><input type="text" /></p>
					<p><label htmlFor="password">password</label><input type="text"/></p>
					<p><button onClick={this.handleSignIn}>signin</button></p>
				</div>


				<Header>signup</Header>

				<div>
					<p><label htmlFor="user">user</label><input type="text"  onChange={(e)=>{this.handleName.call(this,e)}} value={this.state.name}/></p>
					<p><label htmlFor="email">email</label><input type="text"  onChange={(e)=>{this.handleEmail.call(this,e)}} value={this.state.email}/></p>
					<p><label htmlFor="password">password</label><input type="text" onChange={(e)=>{this.handlePassword.call(this,e)}} value={this.state.password} /></p>
					<p><button onClick={this.handleSignUp.bind(this)}>signup</button></p>
				</div>
				

			</div>

		)


	}	
	

}

