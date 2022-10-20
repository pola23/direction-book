import { useState } from 'react'

import {
  Button,
  Container,
  FileButton,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core'
import Axios from 'axios'

import { useMutation } from '@redwoodjs/web'

const DELETE_IMAGE = gql`
  mutation deleteInfromationImage($publicId: String!) {
    deleteInfromationImage(publicId: $publicId)
  }
`

const InformationImageUpload = ({ imageState, isUploadState }) => {
  const [deleteImage, { data, loading, error }] = useMutation(DELETE_IMAGE)
  const [imageSelected, setImageSelected] = useState<File | null>(null)
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
    <Stack>
      {!imageSelected && (
        <Stack>
          <FileButton onChange={setImageSelected} accept="image/png,image/jpeg">
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
        </Stack>
      )}

      {imageSelected && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {imageSelected.name}
        </Text>
      )}

      {imageSelected && !imageState.imageUrl && (
        <Stack>
          <Button
            color="teal"
            type="button"
            onClick={uploadImage}
            disabled={isUploadState.isUpload}
          >
            Upload Image
          </Button>
        </Stack>
      )}

      {imageState.imageUrl && (
        <Stack>
          <Image
            height={300}
            fit="contain"
            src={imageState.imageUrl.split('&')[0]}
            alt={`List Upload`}
            withPlaceholder
          />
          <Button
            color="red"
            type="button"
            onClick={async () => {
              await deleteImage({
                variables: { publicId: imageState.imageUrl.split('&')[1] },
              })
              imageState.setImageUrl('')
              setImageSelected(null)
            }}
            disabled={loading}
          >
            Remove Image
          </Button>
        </Stack>
      )}
    </Stack>
  )
}

export default InformationImageUpload
