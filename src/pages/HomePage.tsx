import React from 'react'
import Layout from '../layouts/Layout'
import AboutUs from '../comopents/AboutUs'
import Contact from '../comopents/Contact'
import Button from '../comopents/ui/Button'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <Layout>

    <section className='w-full flex flex-wrap justify-between my-14 md:my-24 md:py-24  '>
     <div className='md:w-1/3 flex flex-col gap-x-4 '>
        <h1>Pet Expo </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ipsa accusamus labore totam deleniti laudantium sunt quibusdam, nihil vitae officiis incidunt? Expedita repellat ex commodi sequi minima illum eligendi blanditiis.</p>
        <Button>
          <Link to='/pets/dogs'>Explore</Link>
        </Button>
     </div>
     <div className='md:w-1/2 rounded-lg bg-[#dad8d8] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'>
     <img className='mix-blend-multiply ' src="https://www.lonetreevet.com/blog/wp-content/uploads/2017/02/LoneTree_iStock-106396236.jpg" alt=""/>
     </div>
        
    </section>
   <AboutUs/>
   <Contact/>

    </Layout>
  )
}

export default HomePage
