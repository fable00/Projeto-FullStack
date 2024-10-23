import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

interface IFerramentasDeDetalhe {
  textNewButton?: string

  showNewButton?: boolean
  showBackButton?: boolean
  showSaveButton?: boolean
  showSaveBackButton?: boolean
  showDeleteButton?: boolean

  showNewButtonLoading?: boolean
  showBackButtonLoading?: boolean
  showSaveButtonLoading?: boolean
  showSaveBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean

  onClickNewButton?: () => void
  onClickBackButton?: () => void
  onClickSaveButton?: () => void
  onClickSaveBackButton?: () => void
  onClickDeleteButton?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({
  textNewButton = 'Novo',

  showNewButton = true,
  showBackButton = true,
  showSaveButton = true,
  showSaveBackButton = false,
  showDeleteButton = true,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveBackButtonLoading = false,
  showDeleteButtonLoading = false,

  onClickNewButton,
  onClickBackButton,
  onClickSaveButton,
  onClickSaveBackButton,
  onClickDeleteButton,
}) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
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
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          onClick={onClickSaveButton}
          variant={'contained'}
          color={'primary'}
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {showSaveBackButton &&
        !showSaveBackButtonLoading &&
        !smDown &&
        !mdDown && (
          <Button
            onClick={onClickSaveBackButton}
            variant={'outlined'}
            color={'primary'}
            disableElevation
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant={'button'}
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
            >
              Salvar e Voltar
            </Typography>
          </Button>
        )}
      {showSaveBackButtonLoading && !mdDown && !smDown && (
        <Skeleton width={180} height={60} />
      )}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          onClick={onClickDeleteButton}
          variant={'outlined'}
          color={'primary'}
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && !smDown && (
        <Button
          onClick={onClickNewButton}
          variant={'outlined'}
          color={'primary'}
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            {textNewButton}
          </Typography>
        </Button>
      )}
      {showNewButtonLoading && !smDown && <Skeleton width={110} height={60} />}

      {showBackButton &&
        (showDeleteButton ||
          showSaveButton ||
          showNewButton ||
          showSaveBackButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {showBackButton && !showBackButtonLoading && (
        <Button
          onClick={onClickBackButton}
          variant={'outlined'}
          color={'primary'}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Voltar
          </Typography>
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  )
}
