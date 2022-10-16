import type { FindPostQuery, FindPostQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Post from '../Post/Post'

export const QUERY = gql`
  query FindPostQuery($id: Int!) {
    directionPost: directionPost(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  directionPost,
}: CellSuccessProps<FindPostQuery, FindPostQueryVariables>) => {
  return <Post dirPost={directionPost} showInfo={true} />
}
