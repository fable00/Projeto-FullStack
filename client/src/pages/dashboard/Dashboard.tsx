import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página Inicial'}
      toolBar={<FerramentasDeDetalhe />}
    >
      Teste.......
    </LayoutBaseDePagina>
  )
}
