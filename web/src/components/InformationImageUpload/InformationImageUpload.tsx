import { useState } from 'react'

import Axios from 'axios'

import { useMutation } from '@redwoodjs/web'

const DELETE_IMAGE = gql`
  mutation deleteInfromationImage($publicId: String!) {
    deleteInfromationImage(publicId: $publicId)
  }
`

const InformationImageUpload = ({ imageState, isUploadState }) => {
  const [deleteImage, { data, loading, error }] = useMutation(DELETE_IMAGE)
  const [imageSelected, setImageSelected] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  const uploadImage = () => {
    isUploadState.setIsUpload(true)
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'amz64zyn')

    Axios.post(
      'https://api.cloudinary.com/v1_1/dzmxvq5f5/image/upload',
      formData
    )
      .then((res) => {
        imageState.setImageUrl(`${res.data.secure_url}&${res.data.public_id}`)
        isUploadState.setIsUpload(false)
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
        <button
          type="button"
          onClick={uploadImage}
          disabled={isUploadState.isUpload}
        >
          Upload
        </button>
      )}

      {imageState.imageUrl && (
        <button
          type="button"
          onClick={async () => {
            await deleteImage({
              variables: { publicId: imageState.imageUrl.split('&')[1] },
            })
            imageState.setImageUrl('')
          }}
          disabled={loading}
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
