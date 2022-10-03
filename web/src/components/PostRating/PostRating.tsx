import { useState } from 'react'

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

// import './PostRating.css'
const PostRating = ({ userId, postId, feedbackId }) => {
  const [rate, setRate] = useState(0)
  const { loading, error, data } = useQuery(GET_RATE, {
    variables: { userId, feedbackId },
    onCompleted: () => setRate(data.userRate ? data.userRate.rate : 0),
  })

  const [addRate, createRateState] = useMutation(CREATE_RATE)
  if (loading || createRateState.loading) return <>{'Loading...'}</>
  if (error || createRateState.error)
    return <>{`Error! ${error.message || createRateState.error}`}</>

  const onChange = (newRate) => {
    if (rate == 0) {
      addRate({
        variables: { input: { feedbackId, userId, rate: newRate } },
        onCompleted: () => setRate(newRate),
      })
    }
  }
  return (
    <>
      <div>
        {`Hello ${feedbackId}`}
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
