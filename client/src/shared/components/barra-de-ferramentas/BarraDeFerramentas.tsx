import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

interface IBarraDeFerramentas {
  searchText?: string
  showSearchText?: boolean
  onChangeSearchText?: (newText: string) => void
  newButtonText?: string
  showNewButtonText?: boolean
  onClickNewButton?: () => void
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentas> = ({
  searchText = '',
  showSearchText = false,
  onChangeSearchText,
  newButtonText = 'Novo',
  showNewButtonText = true,
  onClickNewButton,
}) => {
  const theme = useTheme()
  return (
    <Box
      marginX={1}
      paddingX={2}
      padding={1}
      display={'flex'}
      gap={1}
      alignItems={'center'}
      height={theme.spacing(5)}
      component={Paper}
    >
      {showSearchText && (
        <TextField
          value={searchText}
          onChange={(search) => onChangeSearchText?.(search.target.value)}
          placeholder={'Pesquisar...'}
          size={'small'}
        />
      )}
      {showNewButtonText && (
        <Box flex={1} display={'flex'} justifyContent={'end'}>
          <Button
            variant={'contained'}
            color={'primary'}
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={onClickNewButton}
          >
            {newButtonText}
          </Button>
        </Box>
      )}
    </Box>
  )
}
