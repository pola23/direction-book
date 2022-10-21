import { Container, Divider, Text, Image } from '@mantine/core'

const PostInformation = ({ info }) => {
  return (
    <div
      style={{
        backgroundColor: '#EDF2FF',
        borderRadius: '15px',
        margin: '15px auto',
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        padding: '10px',
      }}
    >
      <Container>
        {info.title ? (
          <div style={{ margin: '10px 0px' }}>
            <Divider my="xs" label="Title" variant="dotted" />
            <Container>
              <Text
                color={'dark.5'}
                size={30}
                weight={500}
                style={{ wordWrap: 'break-word' }}
              >
                {info.title}
              </Text>
            </Container>
          </div>
        ) : null}

        {info.imageUrl && (
          <Image
            height={250}
            fit="contain"
            src={info.imageUrl.split('&')[0]}
            alt={`UploadedImage`}
            withPlaceholder
          />
        )}

        {info.location ? (
          <div style={{ margin: '10px 0px' }}>
            <Divider my="xs" label="Location" variant="dotted" />
            <Container>
              <Text color={'dark.5'} style={{ wordWrap: 'break-word' }}>
                {info.location}
              </Text>
            </Container>
          </div>
        ) : null}

        {info.description ? (
          <div style={{ margin: '10px 0px' }}>
            <Divider my="xs" label="Description" variant="dotted" />
            <Container>
              <Text color={'dark.5'} style={{ wordWrap: 'break-word' }}>
                {info.description}
              </Text>
            </Container>
          </div>
        ) : null}

        {info.mode ? (
          <div style={{ margin: '10px 0px' }}>
            <Divider my="xs" label="Mode of Transportation" variant="dotted" />
            <Container>
              <Text color={'dark.5'} style={{ wordWrap: 'break-word' }}>
                {info.mode}
              </Text>
            </Container>
          </div>
        ) : null}

        <div style={{ margin: '10px 0px' }}>
          <Divider my="xs" label="Fare" variant="dotted" />
          <Container>
            <Text color={'dark.5'} style={{ wordWrap: 'break-word' }}>
              {info.fare > 0 ? `₱ ${info.fare}` : 'FREE'}
            </Text>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default PostInformation
