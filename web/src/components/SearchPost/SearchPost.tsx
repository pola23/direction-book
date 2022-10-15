import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Space,
  Text,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons'

const SearchPost = ({ id, refetch }) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  return (
    <Container>
      <Divider
        my="xs"
        label={
          <>
            <IconSearch size={15} />
            <Box ml={5}>
              <Text size={'md'}>Search for Directions</Text>
            </Box>
          </>
        }
        labelProps={{}}
      />
      <form>
        <Input
          type="text"
          id="from"
          placeholder="Destination A"
          onChange={(e) => setFrom(e.target.value)}
        />
        <Space h={5} />
        <Input
          type="text"
          id="to"
          placeholder="Destination B"
          onChange={(e) => setTo(e.target.value)}
        />
        <Space h={5} />
        <Button
          variant="light"
          color="indigo"
          type="button"
          onClick={() => refetch({ input: { id, from, to } })}
          style={{ width: '100%' }}
        >
          Search
        </Button>
      </form>

      <Divider my="xs" />
    </Container>
  )
}

export default SearchPost
