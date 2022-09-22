import { render } from '@redwoodjs/testing/web'

import Information from './Information'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Information', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Information />)
    }).not.toThrow()
  })
})
