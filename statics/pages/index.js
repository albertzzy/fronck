import Header from '../components/header.js'

export default ()=>(
	<div>
		<Header></Header>

		<div>
			<label for="email">email</label><input type="text" id="email"/>
			<label for="password">password</label><input type="text" id="password"/>
			<button>signin</button>
		</div>
	</div>

)