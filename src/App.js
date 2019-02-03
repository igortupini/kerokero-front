import React, { Component } from 'react'

//Components
import Menu from './Menu'
import KweetList from './KweetList'

class App extends Component {
  render() {
	return (
		<div>
			<Menu />
			<KweetList />
		</div>
	);
  }
}

export default App
