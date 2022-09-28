import { MetaTags } from '@redwoodjs/web'

import PostCell from 'src/components/PostCell'

interface Props {
  id: number
}
const DirectionPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Direction" description="Direction page" />

      <h1>DirectionPage</h1>
      <p>ID: {id}</p>
      <PostCell id={id} />
    </>
  )
}

export default DirectionPage
