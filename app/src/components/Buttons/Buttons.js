import React from 'react'

const Buttons = (props) => {
	return (
		<>
			<button onClick = {() => props.clickHandler('strike')}>Strike</button>
			<button onClick = {() => props.clickHandler('ball')}>Ball</button>
			<button onClick = {() => props.clickHandler('foul')}>Foul</button>
			<button onClick = {() => props.clickHandler('hit')}>Hit</button>
		</>
	)
}

export default Buttons;