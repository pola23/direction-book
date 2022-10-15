import { render } from '@redwoodjs/testing/web'

import SearchPost from './SearchPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchPost />)
    }).not.toThrow()
  })
})
