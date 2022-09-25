import { useEffect, useMemo, useState } from 'react'

type infoType = {
  listId: number
  title: string
  description: string
  imageUrl: string
  location: string
  fare: number // let string just for input functionality
}

type propType = {
  info: infoType
  updateInfoValues: (updatedInfo: infoType) => void
  deleteInfo: (listId: number) => void
}

const Information = ({ info, updateInfoValues, deleteInfo }: propType) => {
  const [title, setTitle] = useState(info.title)
  const [description, setDescription] = useState(info.description)
  const [imageUrl, setImageUrl] = useState(info.imageUrl)
  const [location, setLocation] = useState(info.location)
  const [fare, setFare] = useState(info.fare)

  const updatedInfo = useMemo(() => {
    return {
      listId: info.listId,
      title: title,
      description: description,
      imageUrl: imageUrl,
      location: location,
      fare: fare,
    }
  }, [description, fare, imageUrl, info.listId, location, title])

  useEffect(() => {
    updateInfoValues(updatedInfo)
  }, [updateInfoValues, updatedInfo])

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={() => deleteInfo(info.listId)}>Delete</button>
      <form>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <br />
        <textarea
          id="description"
          value={description}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          cols={40}
          rows={5}
        />
        <br />
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          placeholder="Image URL"
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          id="fare"
          value={fare}
          placeholder="Fare Price"
          onChange={(e) => {
            setFare(+e.target.value)
          }}
        />
        <br />
      </form>
    </div>
  )
}

export default Information
