import { MetaTags } from '@redwoodjs/web'

import PostsProfileCell from 'src/components/PostsProfileCell'

const ProfilePage = ({ id }: { id: number }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>Profile</h1>
      <PostsProfileCell id={id} />
    </>
  )
}

export default ProfilePage
