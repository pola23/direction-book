import { Group, Loader, Space, Text } from '@mantine/core'

import { useQuery } from '@redwoodjs/web'

import Post from '../Post/Post'
import SearchPost from '../SearchPost/SearchPost'

export const QUERY = gql`
  query FindPostsHomeQuery($input: filterInput!) {
    directionPosts: directionPosts(input: $input) {
      id
      totalFare
      locationA
      locationB
      description
      feedbackId
      createdAt
      user {
        id
        email
      }
      informations {
        id
        title
        description
        imageUrl
        location
        fare
        mode
      }
    }
  }
`

const PostList = ({ id = '', from = '', to = '' }) => {
  const { loading, error, data, refetch } = useQuery(QUERY, {
    variables: { input: { id, from, to } },
  })

  if (error) return <p>`Error! ${error.message}`</p>
  return (
    <>
      <Space h={7} />
      <div>
        <SearchPost id={id} refetch={refetch} />
      </div>

      {loading ? (
        <Group position="center" style={{ padding: '50px' }}>
          <Loader color="indigo" variant="dots" />
        </Group>
      ) : (
        <div>
          {data.directionPosts.length == 0 ? (
            <Group position="center" style={{ padding: '50px' }}>
              <Text>No Directions Available</Text>
            </Group>
          ) : (
            <Group style={{ margin: 'auto', display: 'block', width: '90%' }}>
              {data.directionPosts.map((p) => (
                <Post
                  key={p.id}
                  dirPost={{
                    id: p.id,
                    user: p.user,
                    locationA: p.locationA,
                    locationB: p.locationB,
                    totalFare: p.totalFare,
                    description: p.description,
                    informations: p.informations,
                    feedbackId: p.feedbackId,
                    createdAt: p.createdAt,
                  }}
                  showInfo={false}
                  profileQuery={{
                    query: QUERY,
                    name: 'FindPostsHomeQuery',
                  }}
                />
              ))}
            </Group>
          )}
        </div>
      )}
    </>
  )
}

export default PostList
