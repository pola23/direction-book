import { Button } from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import PostList from 'src/components/PostList/PostList'

const ProfilePage = ({ id }: { id: number }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>Profile</h1>
      {isAuthenticated && currentUser.id == id ? (
        <Button color="red" size="xs" onClick={logOut}>
          Logout
        </Button>
      ) : (
        <></>
      )}
      <PostList id={`${id}`} />
    </>
  )
}

export default ProfilePage
