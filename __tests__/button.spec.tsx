import { h } from 'preact'
import { shallow } from 'enzyme'

import Button from '../src/components/button'

const submit = () => {
    console.log('clicked')
}

describe('Button', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Button onClick={submit} />)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
