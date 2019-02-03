import React, { Component } from 'react'
import axios from 'axios'

//Components
import Menu from './Menu'
import KweetList from './KweetList'

//Configs
const API_URL = 'http://192.168.1.100:3000/api'

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			kweets: []
		}
	}

	fetchKweets(){
		return axios.get(API_URL+'/kweet')
		.then(res => {
			let kweets = res.data
			this.setState({kweets})
		})
		.catch(e => console.error(e))
	}

	componentDidMount(){
		return this.fetchKweets()
	}
	

	render() {
		let { kweets } = this.state
		console.log(kweets)
		return (
			<div>
				<Menu />
				<KweetList kweets={kweets} />
			</div>
		);
  	}
}

export default App
