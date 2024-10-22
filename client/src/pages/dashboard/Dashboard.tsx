import { Box } from '@mui/material'
import {
  FerramentasDaListagem,
  FerramentasDeDetalhe,
} from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página Inicial'}
      toolBar={
        <Box>
          <FerramentasDaListagem />
          <FerramentasDeDetalhe showSaveBackButton={false} />
        </Box>
      }
    >
      Teste.......
    </LayoutBaseDePagina>
  )
}
