import {
  Box,
  Center,
  Divider,
  Group,
  NavLink,
  Space,
  Title,
} from '@mantine/core'
import { IconHome2, IconSquarePlus, IconUserCircle } from '@tabler/icons'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes, useLocation } from '@redwoodjs/router'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const location = useLocation()
  return (
    <>
      <div style={{ backgroundColor: '#E7F5FF' }}>
        <Title
          order={3}
          align="center"
          size={'225%'}
          color={'#1864AB'}
          style={{ padding: '1.5% 0px' }}
        >
          Direction Book
        </Title>
      </div>
      <Divider my="sm" style={{ margin: '2.5px' }} />
      <Center>
        <Box style={{ display: 'flex', width: '95%' }}>
          <NavLink
            style={{ textAlign: 'center' }}
            label="Home"
            active={routes.home() == location.pathname}
            icon={<IconHome2 size={20} stroke={1.5} />}
            onClick={() => navigate(routes.home())}
            color="indigo"
          />
          <NavLink
            style={{ textAlign: 'center' }}
            label="New Direction"
            active={routes.addDirection() == location.pathname}
            icon={<IconSquarePlus size={20} stroke={1.5} />}
            onClick={() => navigate(routes.addDirection())}
            color="indigo"
          />
          <NavLink
            style={{ textAlign: 'center' }}
            label="Profile"
            active={
              isAuthenticated &&
              routes.profile({ id: currentUser.id }) == location.pathname
            }
            icon={<IconUserCircle size={20} stroke={1.5} />}
            onClick={() => {
              if (isAuthenticated) {
                navigate(routes.profile({ id: currentUser.id }))
              } else {
                navigate(routes.login())
              }
            }}
            color="indigo"
          />
        </Box>
      </Center>
      <Divider my="sm" style={{ margin: '2.5px' }} />
      <main>{children}</main>
    </>
  )
}

export default NavLayout
