import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({children}:{children: ReactNode}) => {
  return (
    <>
    <header className='flex  max-w-[1450px]  m-auto flex-col items-center justify-between p-2 md:p-24  '>
        <NavBar/>
    </header>
     <main className='layout'>
        {children}
     </main>
     <Footer/>
    </>
  )
}

export default Layout
