import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppContext } from '../shared/contexts'

export const AppRoutes = () => {
  const { toggleTheme } = useAppContext()

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Teste
          </Button>
        }
      ></Route>
      <Route path="*" element={<Navigate to={'/home'} />}></Route>
    </Routes>
  )
}
