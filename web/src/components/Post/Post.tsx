import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Menu,
  Text,
} from '@mantine/core'
import { IconDots, IconTrash } from '@tabler/icons'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import PostInformation from '../PostInformation/PostInformation'
import PostRating from '../PostRating/PostRating'

const DELETE_POST = gql`
  mutation deleteDirectionPost($id: Int!) {
    deleteDirectionPost: deleteDirectionPost(id: $id) {
      id
    }
  }
`

const Post = ({
  dirPost,
  showInfo,
  profileQuery,
}: {
  profileQuery?
  showInfo
  dirPost
}) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateInfo = new Date(dirPost.createdAt)
  const date = `${
    month[dateInfo.getUTCMonth()]
  } ${dateInfo.getUTCDate()}, ${dateInfo.getUTCFullYear()}`
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: profileQuery?.query }, profileQuery?.name],
  })
  const { isAuthenticated, currentUser } = useAuth()
  if (error) return <p>Submission error! ${error.message}</p>

  const len = dirPost.informations.length - 2
  return (
    <>
      <div
        style={{
          backgroundColor: '#EDF2FF',
          borderRadius: '25px',
          margin: '15px auto',
        }}
      >
        <Group
          style={{
            gap: '1',
            justifyContent: 'space-between',
          }}
        >
          <Group>
            <Avatar
              style={{ border: '1px solid black', margin: 'auto 10px' }}
              size={30}
              radius="xl"
              src="https://res.cloudinary.com/dzmxvq5f5/image/upload/v1665305379/vyh3wc6oroskzmrb0lbh.jpg"
            />
            <Group style={{ display: 'block' }}>
              <Text
                weight={500}
                variant="link"
                component={Link}
                to={routes.profile({ id: dirPost.user.id })}
              >
                {dirPost.user.email}
              </Text>
              <Text size={12} weight={350}>
                {date}
              </Text>
            </Group>
          </Group>
          <Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button
                  style={{ float: 'right' }}
                  variant="light"
                  color="gray"
                  size="xs"
                  compact
                >
                  <IconDots />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={<IconTrash color={'#d27979'} />}
                  disabled={
                    loading ||
                    !(isAuthenticated && currentUser.id == dirPost.user.id)
                  }
                  onClick={() => deletePost({ variables: { id: dirPost.id } })}
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>

        <p>
          Direction: {dirPost.locationA} 🡆 {dirPost.locationB}
        </p>
        <p>Total Fare: ₱ {dirPost.totalFare}</p>
        <p>Description: {dirPost.description}</p>
        <p>
          {len} Step{len > 1 ? 's' : ''}
        </p>
        <PostRating postId={dirPost.id} feedbackId={dirPost.feedbackId} />
        {showInfo ? (
          <ul>
            {dirPost.informations.map((info) => (
              <li key={info.id}>
                <PostInformation info={info} />
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={() => navigate(routes.direction({ id: dirPost.id }))}
          >
            Show Post
          </button>
        )}
      </div>
    </>
  )
}

export default Post
