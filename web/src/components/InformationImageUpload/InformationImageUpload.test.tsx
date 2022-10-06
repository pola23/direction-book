import { render } from '@redwoodjs/testing/web'

import InformationImageUpload from './InformationImageUpload'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InformationImageUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InformationImageUpload />)
    }).not.toThrow()
  })
})
