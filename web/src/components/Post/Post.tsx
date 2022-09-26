const Post = ({ dirPost }) => {
  return (
    <div>
      <h3>{dirPost.user.email}</h3>
      <p>
        Direction: {dirPost.locationA} 🡆 {dirPost.locationB}
      </p>
      <p>Total Fare: ₱ {dirPost.totalFare}</p>
      <p>Description: {dirPost.description}</p>
      <p>{dirPost.informations.length} Steps</p>
      <p>{JSON.stringify(dirPost)}</p>
    </div>
  )
}

export default Post
