import { MetaTags } from '@redwoodjs/web'

import AddDirectionPanel from 'src/components/AddDirectionPanel/AddDirectionPanel'

const AddDirectionPage = () => {
  return (
    <>
      <MetaTags title="AddDirection" description="AddDirection page" />

      <h1>AddDirectionPage</h1>
      <AddDirectionPanel />
    </>
  )
}

export default AddDirectionPage
