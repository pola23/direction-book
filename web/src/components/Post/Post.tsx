import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

import PostInformation from '../PostInformation/PostInformation'

const DELETE_POST = gql`
  mutation deleteDirectionPost($id: Int!) {
    deleteDirectionPost: deleteDirectionPost(id: $id) {
      id
    }
  }
`

const Post = ({ dirPost, showInfo, profileQuery }) => {
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: profileQuery?.query }, profileQuery?.name],
  })
  const { isAuthenticated, currentUser } = useAuth()
  if (error) return <p>Submission error! ${error.message}</p>

  const len = dirPost.informations.length - 2
  return (
    <div>
      {dirPost.id}
      {isAuthenticated && currentUser.id == dirPost.user.id ? (
        <button
          disabled={loading}
          onClick={() => deletePost({ variables: { id: dirPost.id } })}
        >
          Delete
        </button>
      ) : null}

      <h3>{dirPost.user.email}</h3>
      <p>
        Direction: {dirPost.locationA} 🡆 {dirPost.locationB}
      </p>
      <p>Total Fare: ₱ {dirPost.totalFare}</p>
      <p>Description: {dirPost.description}</p>
      <p>
        {len} Step{len > 1 ? 's' : ''}
      </p>

      {showInfo ? (
        <ul>
          {dirPost.informations.map((info) => (
            <li key={info.id}>
              <PostInformation info={info} />
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Post
