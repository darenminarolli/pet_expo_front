import React, { ReactNode } from 'react'
import NavBar from '../comopents/NavBar'

const Layout = ({children}:{children: ReactNode}) => {
  return (
    <>
    <header className='hidden md:flex w-[1250px] m-auto flex-col items-center justify-between p-2 md:px-48 md:py-6 '>
        <NavBar/>
    </header>
     <main className='layout'>
        {children}
     </main>
    </>
  )
}

export default Layout
