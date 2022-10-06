import { PickerOverlay } from 'filestack-react'

import { useMutation } from '@redwoodjs/web'

const DELETE_IMAGE = gql`
  # Increments a back-end counter and gets its resulting value
  mutation deleteInfromationImage($url: String!) {
    deleteInfromationImage(url: $url)
  }
`

const InformationImageUpload = ({ imageState, isUploadState }) => {
  const [addTodo, { data, loading, error }] = useMutation(DELETE_IMAGE)

  if (loading) return <>{'Submitting...'}</>
  if (error) return <>{`Submission error! ${error.message}`}</>
  return (
    <div>
      {imageState.imageUrl && (
        <div>
          <img
            src={imageState.imageUrl}
            style={{ height: '250px' }}
            alt={`List Upload`}
          />
          <br />
          <button
            onClick={async () => {
              await addTodo({ variables: { url: imageState.imageUrl } })
              imageState.setImageUrl('')
            }}
          >
            Replace Image
          </button>
        </div>
      )}
      {!imageState.imageUrl && (
        <>
          <br />
          <button
            type="button"
            onClick={() => isUploadState.setIsUpload((e) => !e)}
          >
            Upload
          </button>
        </>
      )}

      {isUploadState.isUpload && !imageState.imageUrl ? (
        <PickerOverlay
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={(res) => {
            imageState.setImageUrl(res.filesUploaded[0].url)
            isUploadState.setIsUpload(false)
          }}
        />
      ) : null}
    </div>
  )
}

export default InformationImageUpload
