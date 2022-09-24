import { useEffect, useMemo, useState } from 'react'

type infoType = {
  listId: number
  title: string
  description: string
  imageUrl: string
  location: string
}

type propType = {
  info: infoType
  updateInfoValues: (updatedInfo: infoType) => void
}

const Information = ({ info, updateInfoValues }: propType) => {
  const [title, setTitle] = useState(info.title)
  const [description, setDescription] = useState(info.description)
  const [imageUrl, setImageUrl] = useState(info.imageUrl)
  const [location, setLocation] = useState(info.location)

  const updatedInfo = useMemo(() => {
    return {
      listId: info.listId,
      title: title,
      description: description,
      imageUrl: imageUrl,
      location: location,
    }
  }, [description, imageUrl, info.listId, location, title])

  useEffect(() => {
    updateInfoValues(updatedInfo)
  }, [updateInfoValues, updatedInfo])

  return (
    <div style={{ padding: '1rem' }}>
      <form>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            // passDownValues()
          }}
        />
        <br />
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
            // passDownValues()
          }}
        />
        <br />
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
            // passDownValues()
          }}
        />
        <br />
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value)
            // passDownValues()
          }}
        />
        <br />
      </form>
    </div>
  )
}

export default Information
