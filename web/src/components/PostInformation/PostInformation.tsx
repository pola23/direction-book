const PostInformation = ({ info }) => {
  return (
    <div>
      <h3>Title: {info.title}</h3>
      <p>Location: {info.location}</p>
      <p>Description: {info.description}</p>
      <p>imageUrl: {info.imageUrl}</p>
      {info.imageUrl && (
        <img
          src={info.imageUrl.split('&')[0]}
          style={{ height: '250px' }}
          alt={`UploadedImage`}
        />
      )}
      <p>fare: {info.fare}</p>
      <p>mode: {info.mode}</p>
    </div>
  )
}

export default PostInformation
