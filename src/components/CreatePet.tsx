import React, { useState } from "react";
import Modal from "./ui/Modal";
import SecondaryButton from "./ui/SecondaryButton";
import CatForm from "./Forms/CatForm";
import DogForm from "./Forms/DogForm";
import BirdForm from "./Forms/BirdForm";

interface CreatePetProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreatePet: React.FC<CreatePetProps> = ({ setShowModal }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  return (
    <Modal className="" isOpen={true} onClose={() => setShowModal(false)}>
      <h1 className="text-center primary-header">Create New Pet</h1>
      <div className="w-full my-10">
        <h2 className="secondary-header">Choose Pet's type:</h2>
        <div className=" w-full flex gap-4 flex-wrap md:flex-nowrap justify-center my-6 md:my-14">
          <SecondaryButton
            onClick={() => setSelectedType("dogs")}
            className="w-full md:w-1/3 bg-yellow-500 text-slate-50 "
          >
            Dogs 🐶
          </SecondaryButton>
          <SecondaryButton
            onClick={() => setSelectedType("cats")}
            className="w-full md:w-1/3 bg-blue-500 text-slate-50"
          >
            Cats 😼
          </SecondaryButton>
          <SecondaryButton
            onClick={() => setSelectedType("birds")}
            className="w-full md:w-1/3 bg-red-500 text-slate-50"
          >
            Birds 🦜
          </SecondaryButton>
        </div>
      </div>
      {selectedType === "dogs" && <DogForm setSelectedType={setSelectedType} />}
      {selectedType === "cats" && <CatForm setSelectedType={setSelectedType} />}
      {selectedType === "birds" && <BirdForm setSelectedType={setSelectedType} />}
    </Modal>
  );
};

export default CreatePet;
