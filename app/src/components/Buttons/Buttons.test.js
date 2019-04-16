import React from 'react'
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Buttons from './Buttons'

describe('<Buttons/>', () => {
    it('renders 4 buttons `strike`, `ball`, `foul`, `hit`', () => {
        const {getByText} = render(<Buttons/>)

        expect(getByText(/strike/i)).not.toBeNull()
        expect(getByText(/ball/i)).not.toBeNull()
        expect(getByText(/foul/i)).not.toBeNull()
        expect(getByText(/hit/i)).not.toBeNull()
    })
})