import { MetaTags } from '@redwoodjs/web'

import AddDirectionPanel from 'src/components/AddDirectionPanel/AddDirectionPanel'

const AddDirectionPage = () => {
  return (
    <>
      <MetaTags title="AddDirection" description="AddDirection page" />

      <AddDirectionPanel />
    </>
  )
}

export default AddDirectionPage
