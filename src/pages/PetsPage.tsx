import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'
import PetCard from '../comopents/ui/PetCard'
import { petService } from '../services/AnimalService'
import { Pet } from '../types/animal'

const PetsPage = () => {
  const params = useParams()
  const { type } = params
  const [pets, setPets] = useState<Pet[]>([])
  const [error, setError] = useState<string | undefined>()
  useEffect(()=>{
    const fetchPets = async ()=>{
      if(type === 'birds'|| type === 'cats' || type === 'dogs')
      try {
        const data = await petService.getPets(type)
        setPets(data)
      } catch (error) {
        console.log(error)
        setError('Error getting pets! Please try again!')
      }
      else{
        setError('Invalid pet type')
      }
    }
    fetchPets()
  },[type])
  console.log(pets)
 if(error){
  return <div>{error}</div>
 }
  return (
    <Layout>
       <div className='w-full flex flex-wrap gap-10 my-14 md:my-24 md:py-24'>
       {pets.length > 0 ? (
          pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <div>No pets found!</div>
        )}
       </div>
    </Layout>
  )
}

export default PetsPage
