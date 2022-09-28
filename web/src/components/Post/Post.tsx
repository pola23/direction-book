const Post = ({ dirPost }) => {
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
      <p>{JSON.stringify(dirPost)}</p>
    </div>
  )
}

export default Post
