import { useState } from 'react'

import Axios from 'axios'
import sha1 from 'sha1'

import { useMutation } from '@redwoodjs/web'

const DELETE_IMAGE = gql`
  mutation deleteInfromationImage($publicId: String!) {
    deleteInfromationImage(publicId: $publicId)
  }
`

const InformationImageUpload = ({ imageState, isUploadState }) => {
  const [deleteImage, { data, loading, error }] = useMutation(DELETE_IMAGE)
  const [imageSelected, setImageSelected] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const uploadImage = () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'amz64zyn')

    Axios.post(
      'https://api.cloudinary.com/v1_1/dzmxvq5f5/image/upload',
      formData
    )
      .then((res) => {
        imageState.setImageUrl(`${res.data.secure_url}&${res.data.public_id}`)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const destroyImage = async () => {
    setIsLoading(true)
    const public_id = imageState.imageUrl.split('&')[1]
    const timestamp = new Date().getTime()
    const string = `public_id=${public_id}&timestamp=${timestamp}${'t9Nrs662f2JfKxiG4RtV4hSNWEo'}`
    const signature = await sha1(string)

    const formData = new FormData()
    formData.append('public_id', public_id)
    formData.append('api_key', '462859866789283')
    formData.append('signature', signature)
    formData.append('timestamp', `${timestamp}`)

    Axios.post(
      'https://api.cloudinary.com/v1_1/dzmxvq5f5/image/destroy',
      formData
    )
      .then(() => {
        imageState.setImageUrl('')
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        type={'file'}
        defaultValue={imageSelected}
        onChange={(e) => {
          setImageSelected(e.target.files[0])
        }}
      />

      {imageSelected && !imageState.imageUrl && (
        <button type="button" onClick={uploadImage} disabled={isLoading}>
          Upload
        </button>
      )}

      {imageState.imageUrl && (
        <button
          type="button"
          onClick={() => destroyImage()}
          disabled={isLoading}
        >
          Destroy
        </button>
      )}

      {imageState.imageUrl && (
        <img
          src={imageState.imageUrl.split('&')[0]}
          style={{ height: '250px' }}
          alt={`List Upload`}
        />
      )}
    </div>
  )
}

export default InformationImageUpload
