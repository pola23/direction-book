import { MetaTags } from '@redwoodjs/web'

import PostsHomeCell from 'src/components/PostsHomeCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <PostsHomeCell />
    </>
  )
}

export default HomePage
