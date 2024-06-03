/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

interface PetCardProps {
  pet: any;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const [showModal, setShowModal] = useState(false);
  const excludeKeys = [
    "image_path",
    "_id",
    "type_of_pet",
    "updatedAt",
    "__v",
    "createdAt",
    "name",
  ];
  const base_url = import.meta.env.VITE_BASE_URL;
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleColorFormat = (colors: string) => {
    return colors.replace(/[[\]"]+/g, " ");
  };

  return (
    <>
      <div className="relative w-full h-64 md:h-80 lg:h-[700px] overflow-hidden rounded-lg shadow-lg group">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={base_url + pet.image_path}
          alt={`${pet.name} image`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col justify-end h-full p-4">
          <h1 className="text-2xl font-bold text-white">{pet.name}</h1>
          <h2 className="text-lg text-white">
            {pet.origin || pet.place_of_found}
          </h2>
          <Button
            onClick={openModal}
            className="min-w-[250px] h-12 self-center justify-center mt-2 px-4 py-2  rounded opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300"
          >
            More...
          </Button>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
        </div>
        <div className="flex flex-col gap-y-6">
          {Object.entries(pet).map(([key, value]) => {
            if (excludeKeys.includes(key) || value === null || (Array.isArray(value) && value.length < 1 )) return null;

            return (
              <div
                key={key}
                className="flex justify-between border-b-2 border-dotted border-slate-950"
              >
                <span className="font-semibold uppercase">{key}:</span>
                <span className="md:max-w-[500px] text-end text-wrap">
                  {key === "colors"
                    ? handleColorFormat(String(value))
                    : Array.isArray(value)
                    ? value.join(", ")
                    : String(value)}{" "}
                </span>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default PetCard;
