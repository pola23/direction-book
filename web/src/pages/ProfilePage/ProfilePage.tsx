import { MetaTags } from '@redwoodjs/web'

import PostList from 'src/components/PostList/PostList'
import ProfileInfoCell from 'src/components/ProfileInfoCell/'

const ProfilePage = ({ id }: { id: number }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <ProfileInfoCell id={id} />

      <PostList id={`${id}`} />
    </>
  )
}

export default ProfilePage
