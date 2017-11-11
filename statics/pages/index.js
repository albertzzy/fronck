import React from 'react';
import 'whatwg-fetch'
import axios from 'axios'

/* import { Layout,Tabs , Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane; */
// import 'antd/dist/antd.css';
import './index.css'

export default class IndexPage extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			name:'',
			email:'',
			password:'',
			signinName:'',
			signinPs:''
		}
		
		this.handleSignIn = this.handleSignIn.bind(this);
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

	handleSigninName(e){
		this.setState({
			signinName:e.target.value
		})
	}

	handleSigninPassword(e){
		this.setState({
			signinPs:e.target.value
		})

	}

	handleSignIn(){
		let {signinName,signinPs} = this.state;

		axios.post('/sign/signin', {
			name: signinName,
			password: signinPs
		})
		.then(function (response) {
			console.log(response);

			if(response.data.success){
				window.location.href = '/workspace';

			}else{


			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	handleSignUp(){
		let {name,email,password} = this.state;

		axios.post('/sign/signup', {
			name,
			password,
			email
		})
		.then(function (response) {
			console.log(response);

			
		})
		.catch(function (error) {
			console.log(error);
		});


	}
	
	componentDidMount(){

	}





	render(){
		return(
			<div>
				 <div className="layout">
    				<header style={{ background: '#ddd',color:'#000' }}>
						AMP
					</header>
					<div style={{ padding: '0 50px' }}>
						<div>
							<div tab="signin" key="1">
								<div>
									<p><label htmlFor="email">email/user</label><input type="text" onChange={(e)=>{this.handleSigninName.call(this,e)}} value={this.state.signinName}/></p>
									<p><label htmlFor="password">password</label><input type="text" onChange={(e)=>{this.handleSigninPassword.call(this,e)}} value={this.state.signinPs}/></p>
									<p><button onClick={this.handleSignIn}>signin</button></p>
								</div>
							</div>
							<div tab="signup" key="2">
								<div>
									<p><label htmlFor="user">user</label><input type="text"  onChange={(e)=>{this.handleName.call(this,e)}} value={this.state.name}/></p>
									<p><label htmlFor="email">email</label><input type="text"  onChange={(e)=>{this.handleEmail.call(this,e)}} value={this.state.email}/></p>
									<p><label htmlFor="password">password</label><input type="text" onChange={(e)=>{this.handlePassword.call(this,e)}} value={this.state.password} /></p>
									<p><button onClick={this.handleSignUp.bind(this)}>signup</button></p>
								</div>
							</div>
						</div>


						
					
						

					</div>
					<footer style={{ textAlign: 'center' }}>
						api management platform ©2017 Created by albert
					</footer>

				</div>
			</div>

		)


	}	
	

}

