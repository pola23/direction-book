import { render } from '@redwoodjs/testing/web'

import AddDirectionPage from './AddDirectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddDirectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddDirectionPage />)
    }).not.toThrow()
  })
})
