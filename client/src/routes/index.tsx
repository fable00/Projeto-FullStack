import { Routes, Route, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { DashBoard } from '../pages'

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext()

  useEffect(() => {
    setDrawerOption([
      {
        label: 'Página inicial',
        icon: 'star',
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
      <Route path="/home" element={<DashBoard />}></Route>
      <Route path="/city" element={<h1>Cidades</h1>}></Route>
      <Route path="*" element={<Navigate to={'/home'} />}></Route>
    </Routes>
  )
}
