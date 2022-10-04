import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'

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
    skip: !currentUser,
  })

  const [addRate, createRateState] = useMutation(CREATE_RATE)
  const [updateRate, updateRateState] = useMutation(UPDATE_RATE)
  if (loading || createRateState.loading || updateRateState.loading)
    return <>{'Loading...'}</>
  if (error || createRateState.error)
    return (
      <>{`Error! ${
        error.message || createRateState.error || updateRateState.error
      }`}</>
    )

  const onChange = (newRate) => {
    if (!isAuthenticated) return navigate(routes.login())

    if (rate == 0) {
      addRate({
        variables: {
          input: { feedbackId, userId: currentUser.id, rate: newRate },
        },
        onCompleted: () => setRate(newRate),
      })
    } else {
      updateRate({
        variables: { id: data.userRate.id, input: { rate: newRate } },
        onCompleted: () => setRate(newRate),
      })
    }
  }
  return (
    <>
      <div>
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
        <div>{rate}/5 - 10 Ratings</div>
        <br />
        <br />
      </div>
    </>
  )
}

export default PostRating
