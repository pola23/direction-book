import { Space } from '@mantine/core'

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
        <p>{'Loading...'}</p>
      ) : (
        <div>
          {data.directionPosts.length == 0 ? (
            <p>No Directions Available</p>
          ) : (
            <ul>
              {data.directionPosts.map((p) => (
                <li key={p.id}>
                  <Post
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
                    profileQuery={{ query: QUERY, name: 'FindPostsHomeQuery' }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export default PostList
