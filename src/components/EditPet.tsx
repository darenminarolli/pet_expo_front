import React from "react";
import Modal from "./ui/Modal";
import DogForm from "./Forms/DogForm";
import CatForm from "./Forms/CatForm";
import BirdForm from "./Forms/BirdForm";
import { Pet } from "../types/animal";

interface PropsType {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  pet: Pet ;
}

const EditPet: React.FC<PropsType> = ({ showModal, setShowModal, pet }) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <h1 className="text-center primary-header">Edit Pet</h1>
      {pet.type_of_pet === "cats" && <CatForm  pet={pet} />}
      {pet.type_of_pet === "dogs" && <DogForm   pet={pet} />}
      {pet.type_of_pet === "birds" && <BirdForm  pet={pet} />}
    </Modal>
  );
};

export default EditPet;
