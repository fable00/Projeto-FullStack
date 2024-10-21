import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/home" element={<p>Pagina inicial</p>}></Route>
            <Route path="*" element={<Navigate to={'/home'} />}></Route>
        </Routes>
    )
}