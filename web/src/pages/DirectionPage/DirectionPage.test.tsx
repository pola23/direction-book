import { render } from '@redwoodjs/testing/web'

import DirectionPage from './DirectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DirectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DirectionPage />)
    }).not.toThrow()
  })
})
