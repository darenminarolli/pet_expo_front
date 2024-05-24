import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PetCard from '../comopents/ui/PetCard';
import { petService } from '../services/AnimalService';
import { Pet } from '../types/animal';
import Filter from '../comopents/Filter';

const PetsPage = () => {
  const params = useParams();
  const { type } = params;
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [petName, setPetName] = useState('');
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchPets = async () => {
      if (type === 'birds' || type === 'cats' || type === 'dogs') {
        try {
          const data = await petService.getPets(type);
          setPets(data);
          setFilteredPets(data);
        } catch (error) {
          console.error(error);
          setError('Error getting pets! Please try again!');
        }
      } else {
        setError('Invalid pet type');
      }
    };
    fetchPets();
  }, [type]);

  useEffect(() => {
    const getPetByName = async () => {
      if (petName === '') {
        setFilteredPets(pets);
        return;
      }

      if (type === 'birds' || type === 'cats' || type === 'dogs') {
        try {
          const data = await petService.getPetByName(type, petName);
          setFilteredPets(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getPetByName();
  }, [petName, pets, type]);
console.log(petName)
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <h1 className='self-start md:text-3xl font-bold underline '>#{type?.toUpperCase()}</h1>
      <Filter petName={petName} setPetName={setPetName} />
      <div className='w-full flex flex-wrap gap-10 my-14 md:my-24 md:py-24'>
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <div>No pets found!</div>
        )}
      </div>
    </Layout>
  );
};

export default PetsPage;
