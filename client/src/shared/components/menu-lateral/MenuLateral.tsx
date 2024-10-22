// Change image last digit to 4

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { ReactNode } from 'react'
import { useDrawerContext } from '../../contexts'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

interface IListItemLinkProps {
  label: string
  to: string
  icon: string
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate()
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    onClick?.()
    navigate(to)
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

interface IMenuLateralProps {
  children: ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            width={'100%'}
            height={theme.spacing(20)}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/126501493"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component={'nav'}>
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
