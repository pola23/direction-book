import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AddDirectionPage = () => {
  return (
    <>
      <MetaTags title="AddDirection" description="AddDirection page" />

      <h1>AddDirectionPage</h1>
      <p>
        Find me in <code>./web/src/pages/AddDirectionPage/AddDirectionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>addDirection</code>, link to me with `
        <Link to={routes.addDirection()}>AddDirection</Link>`
      </p>
    </>
  )
}

export default AddDirectionPage
