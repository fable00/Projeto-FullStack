import { FerramentasDaListagem } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página Inicial'}
      toolBar={<FerramentasDaListagem showSearchText newButtonText="Nova" />}
    >
      Teste.......
    </LayoutBaseDePagina>
  )
}
