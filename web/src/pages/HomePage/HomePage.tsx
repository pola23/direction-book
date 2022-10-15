import { Container, Space, Title } from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import PostList from 'src/components/PostList/PostList'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Space h={25} />
      <Container>
        <Title order={3} weight={500} style={{ wordWrap: 'break-word' }}>
          Hi, {isAuthenticated ? currentUser.email : 'Guest'}! 👋
        </Title>
      </Container>
      <Space h={10} />
      <PostList />
    </>
  )
}

export default HomePage
