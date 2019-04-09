import React from 'react'
import {render, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from './Display'


describe('<Display/>', () => {
	it('renders `Balls:  | Strikes: ` if no balls and strikes props provided', () => {
        const {queryByText} = render(<Display/>)
        expect(queryByText(/Balls: 0 | Strikes: 0 /i)).not.toBeNull()
    });
    // afterEach(cleanup)
    it('renders `Balls: props.balls | Strikes: props.strikes` if balls and strikes props provided', () => {
        const {getByTestId, rerender} = render(<Display balls = {0} strikes = {0}/>)
        expect(getByTestId('balls-count').textContent).toBe('0')
        expect(getByTestId('strikes-count').textContent).toBe('0')

        rerender(<Display balls = {1} strikes = {1}/>)
        expect(getByTestId('balls-count').textContent).toBe('1')
        expect(getByTestId('strikes-count').textContent).toBe('1')

        rerender(<Display balls = {3} strikes = {2}/>)
        expect(getByTestId('balls-count').textContent).toBe('3')
        expect(getByTestId('strikes-count').textContent).toBe('2')
    });
})