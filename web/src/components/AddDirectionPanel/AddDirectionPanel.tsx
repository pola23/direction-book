import { useCallback, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import Information from '../Information/Information'

const CREATE_DIRECTION_POST = gql`
  mutation CreateDirectionPost($input: CreateDirectionPostInput!) {
    createDirectionPost(input: $input) {
      id
    }
  }
`

const CREATE_INFORMATION = gql`
  mutation CreateInformation($input: CreateInformationInput!) {
    createInformation(input: $input) {
      id
    }
  }
`

type infoType = {
  listId: number
  title: string
  description: string
  imageUrl: string
  location: string
  fare: number
}

const AddDirectionPanel = () => {
  const { currentUser } = useAuth()
  const [addDirectionPost, AddDirectionState] = useMutation(
    CREATE_DIRECTION_POST
  )

  const [addInformation, AddInformationState] = useMutation(CREATE_INFORMATION)

  const [infoList, setInfoList] = useState<infoType[]>([])
  // const [disableSubmit, setDisableSubmit] = useState<boolean>(false)

  const AddNewInfo = () => {
    const newInfo: infoType = {
      listId: infoList.length,
      title: '',
      description: '',
      imageUrl: '',
      location: '',
      fare: 0,
    }

    setInfoList([...infoList, newInfo])
  }

  const UpdateInfoValues = useCallback((updatedInfo: infoType) => {
    // setDisableSubmit(isNaN(+updatedInfo.fare))
    setInfoList((currInfos) => {
      const index = currInfos
        .map((info_) => info_.listId)
        .indexOf(updatedInfo.listId)
      const newInfoList = [
        ...currInfos.slice(0, index),
        updatedInfo,
        ...currInfos.slice(index + 1),
      ]
      return newInfoList
    })
  }, [])

  if (AddDirectionState.loading) return 'Submitting...'
  if (AddDirectionState.error)
    return `Submission error! ${AddDirectionState.error.message}`

  if (AddInformationState.loading) return 'Submitting...'
  if (AddInformationState.error)
    return `Submission error! ${AddInformationState.error.message}`

  return (
    <div>
      <ul>
        {infoList.map((info) => (
          <li key={info.listId}>
            <Information info={info} updateInfoValues={UpdateInfoValues} />
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          AddNewInfo()
        }}
      >
        Add Information
      </button>
      <button
        onClick={() => {
          console.log('INFO', infoList)
        }}
      >
        GET INFOS
      </button>

      <button
        // disabled={disableSubmit}
        onClick={async () => {
          const dirPost = await addDirectionPost({
            variables: { input: { userId: currentUser.id, totalFare: 100 } },
          })
          await Promise.all(
            infoList.map((e) =>
              addInformation({
                variables: {
                  input: {
                    directionPostId: dirPost.data.createDirectionPost.id,
                    title: e.title,
                    description: e.description,
                    imageUrl: e.imageUrl,
                    location: e.location,
                    fare: e.fare,
                  },
                },
              })
            )
          )
          navigate(routes.home())
        }}
      >
        SUBMIT
      </button>
    </div>
  )
}

export default AddDirectionPanel
