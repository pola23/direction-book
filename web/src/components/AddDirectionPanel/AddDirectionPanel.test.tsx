import { render } from '@redwoodjs/testing/web'

import AddDirectionPanel from './AddDirectionPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddDirectionPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddDirectionPanel />)
    }).not.toThrow()
  })
})
