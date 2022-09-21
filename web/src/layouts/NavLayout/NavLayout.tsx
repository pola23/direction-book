import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>Direction Book</header>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.addDirection()}>Add Direction</Link>
          </li>
        </ul>
      </nav>
      <div>
        {isAuthenticated ? (
          <>
            <span>Logged in as {currentUser.email}</span>
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <div>
            <Link to={routes.login()}>Login</Link>
          </div>
        )}
      </div>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
