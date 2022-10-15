import { Avatar, Button, Container, Group, Space, Text } from '@mantine/core'
import type {
  FindProfileInfoQuery,
  FindProfileInfoQueryVariables,
} from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProfileInfoQuery($id: Int!) {
    user: user(id: $id) {
      id
      email
      directionPost {
        id
      }
      Rate {
        userId
        rate
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProfileInfoQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindProfileInfoQuery, FindProfileInfoQueryVariables>) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <div
        style={{
          backgroundColor: '#EDF2FF',
          borderRadius: '25px',
          width: '95%',
          margin: '15px auto',
        }}
      >
        <Space h={30} />
        <Avatar
          style={{ margin: 'auto', border: '5px solid white' }}
          radius="xl"
          size={100}
          src="https://res.cloudinary.com/dzmxvq5f5/image/upload/v1665305379/vyh3wc6oroskzmrb0lbh.jpg"
        />
        <Space h={10} />
        <Text size="xl" weight={500} align="center">
          {user.email}
        </Text>
        <Text size="md" align="center">
          Posted {user.directionPost.length} Directions
        </Text>
        <Space h={30} />
      </div>
      {isAuthenticated && currentUser.id == user.id ? (
        <Group position="right" style={{ padding: '0px 20px' }}>
          <Button color="red" size="xs" onClick={logOut}>
            Logout
          </Button>
        </Group>
      ) : (
        <></>
      )}
    </>
  )
}
