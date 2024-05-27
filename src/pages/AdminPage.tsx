import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Button from "../components/ui/Button";
import Filter from "../components/Filter";
import SecondaryButton from "../components/ui/SecondaryButton";
import SecondaryCard from "../components/ui/SecondaryCard";
import { Pet } from "../types/animal";
import { petService } from "../services/AnimalService";
import CreatePet from "../components/CreatePet";

const AdminPage = () => {
  const [pets,setPets] = useState<Pet[]>([])
  const [petName, setPetName] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
   const fetchPets = async ()=>{
     try{
       const data = await petService.getAllPets()
       setPets(data)
     }catch(error){
       console.error(error)
     }
   }
   fetchPets()
  },[])
  const handleDeletePet = async(id:string) =>{
    try{
      const response = await petService.deletePet(id)
      console.log(response)
      window.location.reload()
    }catch(error){
      console.error(error)
    }
  }
  return (
    <Layout>
      <section className="w-full flex flex-wrap gap-10 my-14 md:my-14 md:py-14 ">
        <div className="w-full flex flex-wrap justify-between items-center">
          <h1 className="primary-header ">#Admin Page</h1>
          <Button onClick={()=>setShowModal(true)} className="md:w-1/6">Create New +</Button>
        </div>
        <div className="w-full mt-6 md:mt-24 flex flex-wrap ">
          <div className="w-full flex">
            <h1 className="secondary-header">Filters:</h1>
            <Filter className="justify-center" />
          </div>
          <div className=" w-full flex gap-4 flex-wrap md:flex-nowrap justify-end my-6 md:my-14">
            <SecondaryButton
              onClick={() => setSelectedType("Dogs")}
              className="w-full md:w-1/4 bg-yellow-500 text-slate-50 "
            >
              Dogs 🐶
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType("Cats")}
              className="w-full md:w-1/4 bg-blue-500 text-slate-50"
            >
              Cats 😼
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType("Birds")}
              className="w-full md:w-1/4 bg-red-500 text-slate-50"
            >
              Birds 🦜
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType(null)}
              className="w-full md:w-1/4 bg-rose-100  text-black"
            >
              All 🐶 😼 🦜
            </SecondaryButton>
          </div>
        </div>
        {selectedType && <h2>Pet Selected: {selectedType}</h2>}
        <div className="w-full p-4 flex flex-col bg-slate-50 rounded-lg drop-shadow-xl space-y-6 ">
          {pets.map( pet=>  <SecondaryCard key={pet._id} pet={pet} handleDeletePet={handleDeletePet} />)}
        </div>
      </section>
      {showModal && <CreatePet setShowModal={setShowModal}/>}
    </Layout>
  );
};

export default AdminPage;
