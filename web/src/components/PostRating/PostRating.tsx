import { useState } from 'react'

import 'src/index.css'
import { Group, Loader, Text } from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'

const GET_FEEDBACK = gql`
  query feedback($id: Int!) {
    feedback: feedback(id: $id) {
      id
      rating
      rates {
        id
      }
    }
  }
`

const UPDATE_FEEDBACK = gql`
  mutation updateFeedback($id: Int!) {
    updateFeedback: updateFeedback(id: $id) {
      id
    }
  }
`

const GET_RATE = gql`
  query userRate($userId: Int!, $feedbackId: Int!) {
    userRate: userRate(userId: $userId, feedbackId: $feedbackId) {
      id
      rate
    }
  }
`

const CREATE_RATE = gql`
  mutation createRate($input: CreateRateInput!) {
    createRate: createRate(input: $input) {
      id
    }
  }
`

const UPDATE_RATE = gql`
  mutation updateRate($id: Int!, $input: UpdateRateInput!) {
    updateRate: updateRate(id: $id, input: $input) {
      id
    }
  }
`

// import './PostRating.css'
const PostRating = ({ postId, feedbackId }) => {
  const { isAuthenticated, currentUser } = useAuth()
  const [rate, setRate] = useState(0)
  const { loading, error, data } = useQuery(GET_RATE, {
    variables: { userId: currentUser?.id, feedbackId },
    onCompleted: () => setRate(data.userRate ? data.userRate.rate : 0),
    skip: !isAuthenticated,
  })

  const getFeedbackState = useQuery(GET_FEEDBACK, {
    variables: { id: feedbackId },
  })

  const [addRate, createRateState] = useMutation(CREATE_RATE)
  const [updateRate, updateRateState] = useMutation(UPDATE_RATE)

  const [updateFeedback, updateFeedbackState] = useMutation(UPDATE_FEEDBACK)
  if (
    loading ||
    createRateState.loading ||
    updateRateState.loading ||
    getFeedbackState.loading ||
    updateFeedbackState.loading
  )
    return (
      <Group position="center" style={{ padding: '50px' }}>
        <Loader color="indigo" variant="dots" />
      </Group>
    )
  if (error || createRateState.error)
    return (
      <>{`Error! ${
        error.message ||
        createRateState.error ||
        updateRateState.error ||
        getFeedbackState.error ||
        updateFeedbackState.error
      }`}</>
    )

  const onChange = async (newRate) => {
    if (!isAuthenticated) return navigate(routes.login())

    if (rate == 0) {
      await addRate({
        variables: {
          input: { feedbackId, userId: currentUser.id, rate: newRate },
        },
        onCompleted: () => setRate(newRate),
      })
    } else {
      await updateRate({
        variables: { id: data.userRate.id, input: { rate: newRate } },
        onCompleted: () => setRate(newRate),
      })
    }
    await updateFeedback({ variables: { id: feedbackId } })
    await getFeedbackState.refetch({ id: feedbackId })
  }
  return (
    <>
      <Group style={{ justifyContent: 'space-between' }}>
        <Group style={{ paddingLeft: '10px' }}>
          <Text size="lg" weight={700} color={'#2C2E33'}>
            {getFeedbackState.data.feedback.rating}/5
          </Text>
          <Text color={'#2C2E33'} italic>
            {getFeedbackState.data.feedback.rates.length} Ratings
          </Text>
        </Group>
        <form>
          <div className="rate">
            <input
              type="radio"
              id={`star5-${postId}`}
              name="rate"
              value="5"
              checked={rate == 5}
              onChange={() => onChange(5)}
            />
            <label htmlFor={`star5-${postId}`} title="text">
              5 stars
            </label>

            <input
              type="radio"
              id={`star4-${postId}`}
              name="rate"
              value="4"
              checked={rate == 4}
              onChange={() => onChange(4)}
            />
            <label htmlFor={`star4-${postId}`} title="text">
              4 stars
            </label>

            <input
              type="radio"
              id={`star3-${postId}`}
              name="rate"
              value="3"
              checked={rate == 3}
              onChange={() => onChange(3)}
            />
            <label htmlFor={`star3-${postId}`} title="text">
              3 stars
            </label>

            <input
              type="radio"
              id={`star2-${postId}`}
              name="rate"
              value="2"
              checked={rate == 2}
              onChange={() => onChange(2)}
            />

            <label htmlFor={`star2-${postId}`} title="text">
              2 stars
            </label>

            <input
              type="radio"
              id={`star1-${postId}`}
              name="rate"
              value="1"
              checked={rate == 1}
              onChange={() => onChange(1)}
            />
            <label htmlFor={`star1-${postId}`} title="text">
              1 star
            </label>
          </div>
        </form>
      </Group>
    </>
  )
}

export default PostRating
