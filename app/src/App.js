import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display';


class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Display/>
				</div>
			</div>
		);
	}
}

export default App;
