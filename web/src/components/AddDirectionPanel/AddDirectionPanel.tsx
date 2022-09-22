import { useEffect, useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

const CREATE_DIRECTION_POST = gql`
  mutation CreateDirectionPost($input: CreateDirectionPostInput!) {
    createDirectionPost(input: $input) {
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
}

const AddDirectionPanel = () => {
  const { currentUser } = useAuth()
  const [addDirectionPost, { loading, error }] = useMutation(
    CREATE_DIRECTION_POST
  )

  const [infoList, setInfoList] = useState<infoType[]>([])

  const AddNewInfo = () => {
    const newInfo: infoType = {
      listId: infoList.length,
      title: '',
      description: '',
      imageUrl: '',
      location: '',
    }

    setInfoList([...infoList, newInfo])
  }

  const UpdateInfoValues = (updatedInfo: infoType) => {
    const index = infoList
      .map((info_) => info_.listId)
      .indexOf(updatedInfo.listId)
    setInfoList((currInfo) => {
      return [
        ...currInfo.slice(0, index),
        updatedInfo,
        ...currInfo.slice(index + 1),
      ]
    })
  }

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <ul>
        {infoList.map((info) => (
          <li key={info.listId}>
            {info.listId} - {JSON.stringify(info)}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          AddNewInfo()
          console.log(infoList)
        }}
      >
        Add Information
      </button>
      <button
        onClick={() => {
          UpdateInfoValues({
            listId: infoList.length - 1,
            title: 'UPDATE',
            description: 'UPDATE',
            imageUrl: 'UPDATE',
            location: 'UPDATE',
          })
        }}
      >
        Update Last Info
      </button>
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
