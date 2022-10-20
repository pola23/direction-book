import { useEffect, useMemo, useState } from 'react'

import {
  Button,
  Group,
  Input,
  NumberInput,
  Stack,
  Textarea,
  Text,
} from '@mantine/core'
import { IconSquareX } from '@tabler/icons'

import InformationImageUpload from '../InformationImageUpload/InformationImageUpload'
type infoType = {
  listId: number
  title: string
  description: string
  imageUrl: string
  location: string
  fare: number
  mode: string
  canBeDeleted: boolean
  isUpload: boolean
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
  const [mode, setMode] = useState(info.mode)
  const [location, setLocation] = useState(info.location)
  const [fare, setFare] = useState(info.fare)

  const [isUpload, setIsUpload] = useState(info.isUpload)

  const updatedInfo = useMemo(() => {
    return {
      listId: info.listId,
      title: title,
      description: description,
      imageUrl: imageUrl,
      location: info.canBeDeleted ? location : info.location,
      fare: fare,
      mode: mode,
      canBeDeleted: info.canBeDeleted,
      isUpload: isUpload,
    }
  }, [
    info.listId,
    info.canBeDeleted,
    info.location,
    title,
    description,
    imageUrl,
    location,
    fare,
    mode,
    isUpload,
  ])

  useEffect(() => {
    updateInfoValues(updatedInfo)
  }, [updateInfoValues, updatedInfo])

  return (
    <>
      {info.canBeDeleted ? (
        <Group position="right">
          <Button
            color={'red.5'}
            onClick={() => deleteInfo(info.listId)}
            compact
          >
            <IconSquareX />
          </Button>
        </Group>
      ) : (
        <></>
      )}
      <Stack>
        <Input.Wrapper label="Title">
          <Input
            id="title"
            placeholder="what is the information all about?"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper label="Description">
          <Textarea
            id="description"
            placeholder="tell more about the information ✍️"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper label="Mode of Transportation">
          <Textarea
            id="transportation"
            placeholder="what mode of transportation did you use? (e.g., walk, jeepney, tricycle, ...)"
            value={mode}
            onChange={(e) => {
              setMode(e.target.value)
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper label="Fare (₱)">
          <NumberInput
            defaultValue={18}
            placeholder="how much does it need to go here?"
            id="fare"
            value={fare}
            onChange={(e) => {
              setFare(e)
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper label="Location">
          <Input
            id="location"
            placeholder="where can this be found?"
            type="text"
            disabled={!info.canBeDeleted}
            value={info.canBeDeleted ? location : info.location}
            onChange={(e) => {
              setLocation(e.target.value)
            }}
          />
        </Input.Wrapper>

        <InformationImageUpload
          imageState={{ imageUrl, setImageUrl }}
          isUploadState={{ isUpload, setIsUpload }}
        />
      </Stack>
    </>
  )
}

export default Information
