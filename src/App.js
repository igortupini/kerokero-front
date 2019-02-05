import React, { Component } from 'react'
import axios from 'axios'

//Components
import Menu from './components/shared/menu/index'
import Profile from './components/profile/index'

//Configs
const API_URL = 'http://192.168.126.128:3030/api'

class App extends Component {

	render() {
		return (
			<div>
				<Menu />
				<Profile />
			</div>
		);
  	}
}

export default App
