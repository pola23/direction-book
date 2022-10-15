import type { FindProfileInfoQuery, FindProfileInfoQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProfileInfoQuery($id: Int!) {
    profileInfo: profileInfo(id: $id) {
      id
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
  profileInfo,
}: CellSuccessProps<FindProfileInfoQuery, FindProfileInfoQueryVariables>) => {
  return <div>{JSON.stringify(profileInfo)}</div>
}
