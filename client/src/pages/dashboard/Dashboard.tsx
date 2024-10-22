import { BarraDeFerramentas } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página Inicial'}
      toolBar={<BarraDeFerramentas showSearchText newButtonText="Nova" />}
    >
      Teste.......
    </LayoutBaseDePagina>
  )
}
