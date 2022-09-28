import { render } from '@redwoodjs/testing/web'

import PostInformation from './PostInformation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostInformation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostInformation />)
    }).not.toThrow()
  })
})
