import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'
import { useDrawerContext } from '../contexts'
interface ILayoutBaseDePagina {
  children: ReactNode
  title: string
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({
  children,
  title,
}) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant={'h5'}>{title}</Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  )
}
