import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Loader,
  Menu,
  Text,
} from '@mantine/core'
import { IconArrowBigRight, IconDots, IconTrash } from '@tabler/icons'

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
    onCompleted: () => navigate(routes.home()),
  })
  const { isAuthenticated, currentUser } = useAuth()
  if (error) return <p>Submission error! ${error.message}</p>

  const len = dirPost.informations.length - 2

  const sortedDirPost = [...dirPost.informations].sort((a, b) => {
    return a.listId - b.listId
  })

  const adjustedInfoList = [
    sortedDirPost[0],
    ...sortedDirPost.slice(2, sortedDirPost.length),
    sortedDirPost[1],
  ]

  console.log(adjustedInfoList)

  if (loading)
    return (
      <Group position="center" style={{ padding: '50px' }}>
        <Loader color="indigo" variant="dots" />
      </Group>
    )

  return (
    <>
      <Container
        style={{
          backgroundColor: '#EDF2FF',
          borderRadius: '25px',
          margin: '15px auto',
          boxShadow:
            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
          padding: '1px',
        }}
      >
        <Container style={{ padding: '15px 2.5px' }}>
          <Group
            style={{
              gap: '1',
              justifyContent: 'space-between',
              padding: '0 10px 10px 10px',
            }}
          >
            <Group>
              <Avatar
                component={Link}
                to={routes.profile({ id: dirPost.user.id })}
                style={{ border: '1px solid black', margin: 'auto 10px' }}
                size={30}
                radius="xl"
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
                      !(isAuthenticated && currentUser.id == dirPost.user.id)
                    }
                    onClick={() =>
                      deletePost({ variables: { id: dirPost.id } })
                    }
                  >
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>

          <Divider size="sm" />
          <div style={{ backgroundColor: 'white', padding: '10px 15px' }}>
            <Group position="center" style={{ gap: '8px', padding: '10px 0' }}>
              <Box
                style={{
                  boxShadow:
                    '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
                  padding: '10px',
                  borderRadius: '25px',
                  minWidth: '35%',
                  maxWidth: '40%',
                  height: 'auto',
                  textAlign: 'center',
                  backgroundColor: '#EDF2FF',
                }}
              >
                <Text size="sm" weight={500} color={'dark.5'}>
                  {dirPost.locationA}
                </Text>
              </Box>
              <IconArrowBigRight color={'#2C2E33'} />
              <Box
                style={{
                  boxShadow:
                    '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
                  padding: '10px',
                  borderRadius: '25px',
                  minWidth: '35%',
                  maxWidth: '40%',
                  textAlign: 'center',
                  backgroundColor: '#EDF2FF',
                }}
              >
                <Text size="sm" weight={500} color={'dark.5'}>
                  {dirPost.locationB}
                </Text>
              </Box>
            </Group>
            {dirPost.description ? (
              <div style={{ margin: '10px 0px' }}>
                <Divider my="xs" label="Description" variant="dotted" />
                <Container>
                  <Text color={'dark.5'} style={{ wordWrap: 'break-word' }}>
                    {dirPost.description}
                  </Text>
                </Container>
              </div>
            ) : null}
            <Divider
              style={{ width: '10%', margin: '10px auto' }}
              size={'md'}
              variant="dotted"
            />
            <PostRating postId={dirPost.id} feedbackId={dirPost.feedbackId} />
            <Group position="right">
              {dirPost.totalFare > 0 ? (
                <Text weight={500} color="dark.2">
                  ₱ {dirPost.totalFare}
                </Text>
              ) : (
                <Text weight={500} color="dark.2">
                  FREE
                </Text>
              )}
              <Text weight={500} color="dark.2">
                {len} Step{len > 1 ? 's' : ''}
              </Text>
            </Group>
            {showInfo ? (
              <Container>
                <Divider style={{ margin: '15px 0' }} />
                <ul>
                  {adjustedInfoList.map((info) => (
                    <li key={info.listId}>
                      <PostInformation info={info} />
                    </li>
                  ))}
                </ul>
              </Container>
            ) : (
              <button
                onClick={() => navigate(routes.direction({ id: dirPost.id }))}
              >
                Show Post
              </button>
            )}
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Post
