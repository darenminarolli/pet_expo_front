import React, { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { petService } from "../../services/AnimalService";
import { Pet } from "../../types/animal";

interface SecondaryButtonProps {
  pet: any;
  handleDeletePet: (id: string) => Promise<void>;
  setEditPet: React.Dispatch<React.SetStateAction<Pet | null>>
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>
}
const SecondaryCard: React.FC<SecondaryButtonProps> = ({
  pet,
  handleDeletePet,
  setEditPet,
  setShowEditModal
}) => {
  const base_url = import.meta.env.VITE_BASE_URL 

  const handleEditPet = () =>{
    setEditPet(pet)
    setShowEditModal(true) 
  }
  
  return (
    <>
    <div className="w-full rounded-md flex flex-wrap md:flex-nowrap h-fit justify-between bg-slate-950 shadow-lg text-slate-50 hover:scale-y-[1.02] hover:scale-x-[1.01]  transition duration-200 ">
      <div className="flex flex-wrap md:w-3/4">
        <img
          className="rounded-t-md md:rounded-l-md w-full md:w-[300px]  "
          src={base_url + pet.image_path}
          alt=""
        />
        <div className="flex flex-col justify-around p-4">
          <h1 className="secondary-header">Name:{pet.name}</h1>
          <h1 className="secondary-header">
            Location: {pet.origin || pet.place_of_found}
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center gap-4">
        <SecondaryButton
          onClick={handleEditPet}
          className="w-full md:w-3/4 bg-cyan-700 text-slate-50"
        >
          Edit 🛠️
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleDeletePet(pet._id)}
          className="w-full md:w-3/4 bg-red-700 text-slate-50"
        >
          Delete 🗑️
        </SecondaryButton>
      </div>
    </div>
      </>
  );
};

export default SecondaryCard;
