import React, { Component } from 'react'

//Components
import Menu from './components/shared/menu/index'
import Profile from './components/profile/index'

//Configs
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
