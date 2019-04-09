import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			balls: 0,
			strikes: 0,
		}
	}
	
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Display balls = {this.state.balls} strikes = {this.state.strikes}/>
					<Buttons clickHandler = {this.handleClick}/>
				</div>
			</div>
		);
	}

	handleClick = (button) => {
		switch(button){
			case 'ball':
				if(this.state.balls < 3){
					this.setState((state) => {
						return {
							balls: state.balls + 1
						}
					})	
				} else {
					this.setState({
						balls: 0,
						strikes: 0
					})
				}
				break;
			case 'strike':
				if(this.state.strikes < 2){
					this.setState((state) => {
						return {
							strikes: state.strikes + 1
						}
					})	
				} else {
					this.setState({
						balls: 0,
						strikes: 0
					})
				}
				break;
			case 'foul':
				if(this.state.strikes < 2){
					this.setState((state) => {
						return {
							strikes:  state.strikes + 1
						}
					})
				}
				break;
			case 'hit':
				this.setState({
					balls: 0,
					strikes: 0
				})
				break;
			default: {
				return
			}
		}
	}
}

export default App;
