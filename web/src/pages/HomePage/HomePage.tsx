import { MetaTags } from '@redwoodjs/web'

import PostList from 'src/components/PostList/PostList'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <PostList />
    </>
  )
}

export default HomePage
