import React from 'react'
import {render} from 'react-testing-library'

import Display from './Display'

describe('<Display/>', () => {
	it('renders `Balls: 0 | Strikes: 0` if no balls and strikes props provided', () => {
        const {queryByText} = render(<Display/>)
        expect(queryByText(/Balls: 0 | Strikes: 0 /i)).not.toBeNull()
    });

    it('renders `Balls: props.balls | Strikes: props.strikes` if balls and strikes props provided', () => {
        const {queryByText} = render(<Display balls = {3} strikes = {1}/>)
        expect(queryByText(/Balls: 3 | Strikes: 1 /i)).not.toBeNull()
    });
})