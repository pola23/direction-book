import { useEffect, useState } from 'react'

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

const Information = (props: propType) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    const updatedInfo: infoType = {
      listId: props.info.listId,
      title: title,
      description: description,
      imageUrl: imageUrl,
      location: location,
    }
    props.updateInfoValues(updatedInfo)
  })
  return (
    <div style={{ padding: '1rem' }}>
      {/* <p>{JSON.stringify(props.info)}</p> */}
      <form>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          id="imageUrl"
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          id="location"
          onChange={(e) => {
            setLocation(e.target.value)
          }}
        />
        <br />
      </form>
    </div>
  )
}

export default Information
