// src/pages/AdminPage.tsx
import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Button from "../components/ui/Button";
import Filter from "../components/Filter";
import SecondaryButton from "../components/ui/SecondaryButton";
import SecondaryCard from "../components/ui/SecondaryCard";
import { Pet } from "../types/animal";
import { petService } from "../services/AnimalService";
import CreatePet from "../components/CreatePet";
import EditPet from "../components/EditPet";
import { getPetByName, getPetsByType } from "../utils/petUtils";

const AdminPage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [petName, setPetName] = useState("");
  const [editPet, setEditPet] = useState<Pet | null>(null);
  const [type, setType] = useState<string>('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petService.getAllPets();
        setPets(data);
        setFilteredPets(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPets();
  }, []);

  useEffect(() => {
    const filterPets = async () => {
      if (petName) {
        await getPetByName(petName, setFilteredPets,pets, type);
      } else if (type !=='' && petName === '') {
        await getPetsByType(setPets, setFilteredPets, setError, type);
      } else {
        setFilteredPets(pets);
      }
    };
    filterPets();
  }, [petName, type]);

  const handleTypeSelection = (selectedType: string) => {
    setType(selectedType);
  };

  const handleDeletePet = async (id: string) => {
    try {
      const response = await petService.deletePet(id);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <section className="w-full flex flex-wrap gap-10 my-14 md:my-14 md:py-14">
        <div className="w-full flex flex-wrap justify-between items-center">
          <h1 className="primary-header">#Admin Page</h1>
          <Button onClick={() => setShowCreateModal(true)} className="md:w-1/6">
            Create New +
          </Button>
        </div>
        <div className="w-full mt-6 md:mt-24 flex flex-wrap">
          <div className="w-full flex">
            <h1 className="secondary-header">Filters:</h1>
            <Filter
              petName={petName}
              setPetName={setPetName}
              className="justify-center"
            />
          </div>
          <div className="w-full flex gap-4 flex-wrap md:flex-nowrap justify-end my-6 md:my-14">
            <SecondaryButton
              onClick={() => handleTypeSelection("dogs")}
              className="w-full md:w-1/4 bg-yellow-500 text-slate-50"
            >
              Dogs 🐶
            </SecondaryButton>
            <SecondaryButton
              onClick={() => handleTypeSelection("cats")}
              className="w-full md:w-1/4 bg-blue-500 text-slate-50"
            >
              Cats 😼
            </SecondaryButton>
            <SecondaryButton
              onClick={() => handleTypeSelection("birds")}
              className="w-full md:w-1/4 bg-red-500 text-slate-50"
            >
              Birds 🦜
            </SecondaryButton>
            <SecondaryButton
              onClick={() => handleTypeSelection('')}
              className="w-full md:w-1/4 bg-rose-100 text-black"
            >
              All 🐶 😼 🦜
            </SecondaryButton>
          </div>
        </div>
        {type && <h2>Pet Selected: {type.toUpperCase()}</h2>}
        <div className="w-full p-4 flex flex-col bg-slate-50 rounded-lg drop-shadow-xl space-y-6">
          {filteredPets.length > 0 ? 
            filteredPets.map((pet) => (
              <SecondaryCard
                key={pet._id}
                pet={pet}
                handleDeletePet={handleDeletePet}
                setEditPet={setEditPet}
                setShowEditModal={setShowEditModal}
              />
            ))
           : 
            <div>No Pets Found</div>
        }
        </div>
      </section>
      <CreatePet
        showModal={showCreateModal}
        setShowModal={setShowCreateModal}
      />
      {editPet && 
        <EditPet
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          pet={editPet}
        />
      }
    </Layout>
  );
};

export default AdminPage;
