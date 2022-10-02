import type {
  FindPostsHomeQuery,
  FindPostsHomeQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Post from '../Post/Post'

export const QUERY = gql`
  query FindPostsHomeQuery {
    directionPosts: directionPosts {
      id
      totalFare
      locationA
      locationB
      description
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
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPostsHomeQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  directionPosts,
}: CellSuccessProps<FindPostsHomeQuery, FindPostsHomeQueryVariables>) => {
  return (
    <div>
      <ul>
        {directionPosts.map((p) => (
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
              }}
              showInfo={false}
              profileQuery={{ query: QUERY, name: 'FindPostsHomeQuery' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
