import { useState } from 'react'

const SearchPost = ({ id, refetch }) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  return (
    <div>
      <form>
        <input
          type="text"
          id="from"
          onChange={(e) => setFrom(e.target.value)}
        />
        <input type="text" id="to" onChange={(e) => setTo(e.target.value)} />

        <button
          type="button"
          onClick={() => refetch({ input: { id, from, to } })}
        >
          search
        </button>
      </form>
    </div>
  )
}

export default SearchPost
