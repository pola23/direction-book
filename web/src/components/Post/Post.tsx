import PostInformation from '../PostInformation/PostInformation'

const Post = ({ dirPost, showInfo }) => {
  const len = dirPost.informations.length - 2
  return (
    <div>
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
