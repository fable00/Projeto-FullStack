import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface IDrawerOption {
  icon: string
  label: string
  path: string
}

interface IDrawerContextData {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOption[]
  toggleDrawerOpen: () => void
  setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void
}

interface IDrawerProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOption: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
