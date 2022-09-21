import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

const CREATE_DIRECTION_POST = gql`
  mutation CreateDirectionPost($input: CreateDirectionPostInput!) {
    createDirectionPost(input: $input) {
      id
    }
  }
`

const AddDirectionPanel = () => {
  const { currentUser } = useAuth()
  const [addDirectionPost, { data, loading, error }] = useMutation(
    CREATE_DIRECTION_POST
  )
  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <p>PANEL</p>
      <button
        onClick={() => {
          addDirectionPost({ variables: { input: { userId: currentUser.id } } })
        }}
      >
        SUBMIT
      </button>
    </div>
  )
}

export default AddDirectionPanel
