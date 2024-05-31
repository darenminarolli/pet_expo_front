import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import PetCard from "../components/ui/PetCard";
import Filter from "../components/Filter";
import { getPetsByType, getPetByName } from "../utils/petUtils";
import { Pet } from "../types/animal";

const PetsPage = () => {
  const params = useParams();
  const { type } = params;
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [petName, setPetName] = useState("");
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    getPetsByType(setFilteredPets, setError, pets, type, setPets);
  }, [type]);

  useEffect(() => {
    console.log('activated', petName)
    getPetByName(petName, setFilteredPets, pets, type);
  }, [petName]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <h1 className="self-start md:text-3xl font-bold underline ">
        #{type?.toUpperCase()}
      </h1>
      <Filter
        className="justify-center"
        petName={petName}
        setPetName={setPetName}
      />
      <div className="w-full flex flex-wrap gap-10 my-14 md:my-24 md:py-24">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => <PetCard key={pet._id} pet={pet} />)
        ) : (
          <div>No pets found!</div>
        )}
      </div>
    </Layout>
  );
};

export default PetsPage;
