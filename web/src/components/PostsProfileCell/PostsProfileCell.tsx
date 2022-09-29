import type {
  FindPostsProfileQuery,
  FindPostsProfileQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Post from '../Post/Post'

export const QUERY = gql`
  query FindPostsProfileQuery($id: Int!) {
    directionPostsProfile: directionPostsProfile(id: $id) {
      id
      totalFare
      locationA
      locationB
      description
      userId
      user {
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
}: CellFailureProps<FindPostsProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  directionPostsProfile,
}: CellSuccessProps<FindPostsProfileQuery, FindPostsProfileQueryVariables>) => {
  return (
    <div>
      <ul>
        {directionPostsProfile.map((p) => (
          <li key={p.id}>
            <Post
              dirPost={{
                id: p.id,
                user: p.user,
                userId: p.userId,
                locationA: p.locationA,
                locationB: p.locationB,
                totalFare: p.totalFare,
                description: p.description,
                informations: p.informations,
              }}
              showInfo={false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
