import { useState } from 'react'

// import './PostRating.css'
const PostRating = () => {
  const [rate, setRate] = useState(0)
  return (
    <>
      <div>
        <form>
          <div className="rate">
            <input
              type="radio"
              id="star5"
              name="rate"
              value="5"
              checked={rate == 5}
              onChange={() => setRate(5)}
            />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="rate"
              value="4"
              checked={rate == 4}
              onChange={() => setRate(4)}
            />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="rate"
              value="3"
              checked={rate == 3}
              onChange={() => setRate(3)}
            />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="rate"
              value="2"
              checked={rate == 2}
              onChange={() => setRate(2)}
            />

            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="rate"
              value="1"
              checked={rate == 1}
              onChange={() => setRate(1)}
            />
            <label htmlFor="star1" title="text">
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
