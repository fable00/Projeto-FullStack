import { Box, Button, TextField } from '@mui/material'
import { ReactNode } from 'react'

interface IBarraDeFerramentas {
  children: ReactNode
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentas> = () => {
  return (
    <Box>
      <TextField />
      <Button>Novo</Button>
    </Box>
  )
}
