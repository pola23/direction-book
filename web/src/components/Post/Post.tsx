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
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: profileQuery?.query }, profileQuery?.name],
  })
  const { isAuthenticated, currentUser } = useAuth()
  if (error) return <p>Submission error! ${error.message}</p>

  const len = dirPost.informations.length - 2
  return (
    <div>
      {isAuthenticated && currentUser.id == dirPost.user.id ? (
        <button
          disabled={loading}
          onClick={() => deletePost({ variables: { id: dirPost.id } })}
        >
          Delete
        </button>
      ) : null}

      <Link to={routes.profile({ id: dirPost.user.id })}>
        <h3>{dirPost.user.email}</h3>
      </Link>
      <p>
        Direction: {dirPost.locationA} 🡆 {dirPost.locationB}
      </p>
      <p>Total Fare: ₱ {dirPost.totalFare}</p>
      <p>Description: {dirPost.description}</p>
      <p>
        {len} Step{len > 1 ? 's' : ''}
      </p>
      <PostRating
        userId={dirPost.user.id}
        postId={dirPost.id}
        feedbackId={dirPost.feedbackId}
      />
      {showInfo ? (
        <ul>
          {dirPost.informations.map((info) => (
            <li key={info.id}>
              <PostInformation info={info} />
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={() => navigate(routes.direction({ id: dirPost.id }))}>
          Show Post
        </button>
      )}
    </div>
  )
}

export default Post
