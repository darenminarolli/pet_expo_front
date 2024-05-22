import React from 'react'
import Layout from '../layouts/Layout'
import PetCard from '../comopents/ui/PetCard'

const PetsPage = () => {
  return (
    <Layout>
       <div className='w-full flex flex-wrap gap-10 my-14 md:my-24 md:py-24'>

         <PetCard name='Pooh' location='Tirana,Albania' imageUrl='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg'/>
         <PetCard name='Pooh' location='Tirana,Albania' imageUrl='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'/>

         <PetCard name='Pooh' location='Tirana,Albania' imageUrl='https://t3.ftcdn.net/jpg/06/10/71/64/360_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg'/>

       </div>
    </Layout>
  )
}

export default PetsPage
