import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import PetsPage from './pages/PetsPage'
import AdminPage from './pages/AdminPage'
import NotFound from './pages/NotFound'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<HomePage/>} />
    <Route path='/pets/:type' element={<PetsPage/>} />
    <Route path='/admin' element={<AdminPage/>} />
    <Route path='*' element={<NotFound/>} />
    </>
  ))
  return (
  <RouterProvider router={router}/>
  )
}

export default App
