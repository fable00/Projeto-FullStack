import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOption } = useDrawerContext()

  useEffect(() => {
    setDrawerOption([
      {
        label: 'Página inicial',
        icon: 'home',
        path: '/home',
      },
      {
        label: 'Cidades',
        icon: 'house',
        path: '/city',
      },
    ])
  })

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Toggle Drawer
          </Button>
        }
      ></Route>
      <Route path="/city" element={<h1>Cidades</h1>}></Route>
      <Route path="*" element={<Navigate to={'/home'} />}></Route>
    </Routes>
  )
}
