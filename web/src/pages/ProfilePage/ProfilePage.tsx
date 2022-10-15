import { MetaTags } from '@redwoodjs/web'

import PostList from 'src/components/PostList/PostList'

const ProfilePage = ({ id }: { id: number }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>Profile</h1>
      <PostList id={`${id}`} />
    </>
  )
}

export default ProfilePage
