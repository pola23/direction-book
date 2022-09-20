type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <header>Direction Book</header>
      <nav>
        <ul>
          <li>Link</li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
