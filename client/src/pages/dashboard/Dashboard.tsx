import { Box } from '@mui/material'
import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página Inicial'}
      toolBar={
        <Box>
          <FerramentasDeDetalhe showSaveBackButton />
        </Box>
      }
    >
      Teste.......
    </LayoutBaseDePagina>
  )
}
