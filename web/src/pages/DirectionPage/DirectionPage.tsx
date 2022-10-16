import { MetaTags } from '@redwoodjs/web'

import PostCell from 'src/components/PostCell'

interface Props {
  id: number
}
const DirectionPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Direction" description="Direction page" />

      <PostCell id={id} />
    </>
  )
}

export default DirectionPage
