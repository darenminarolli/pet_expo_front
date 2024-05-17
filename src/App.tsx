import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import NavBar from './comopents/NavBar'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<HomePage/>} />
    <Route path='/pets' element={<NavBar/>} />
    {/* <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='vans' element={<Vans/>} loader={VansLoader}/>
      <Route path='vans/:id' element={<VanDetail/>} loader={VansDetailLoader}/>
      <Route path='login' element={<Login/>} action={LoginAction} />
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signInSuccess' element={<SignInSucces/>}/>
      <Route path='host' element={<HostLayout/>}  >
        <Route index element={<Dashboard/>}  />
        <Route path='income' element={<Income/>}/>
        <Route path='review' element={<Reviews/>}/>
        <Route path='vans' element={<HostVans/>} loader={VasHostLoader}/>
        <Route path='vans/:id/' element={<VanHostDetail/>} loader={VansHostDetailLoader} >
            <Route index element={<VanHostDetailDetails/>}/> 
            <Route path='pricing' element={<VanHostDetailPricing/>}/>
            <Route path='photos' element={<VanHostDeailPhotos/>}/>
       </Route>
     </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route> */}
    </>
  ))
  return (
  <RouterProvider router={router}/>
  )
}

export default App
