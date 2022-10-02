import { render } from '@redwoodjs/testing/web'

import PostRating from './PostRating'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostRating', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostRating />)
    }).not.toThrow()
  })
})
