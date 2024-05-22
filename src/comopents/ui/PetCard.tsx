import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { Bird, Cat, Dog, Pet } from '../../types/animal';

interface PetCardProps {
  pet: any
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="relative w-full h-64 md:h-80 lg:h-[700px] overflow-hidden rounded-lg shadow-lg group">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={pet.image}
          alt={`${pet.name} image`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col justify-end h-full p-4">
          <h1 className="text-2xl font-bold text-white">{pet.name}</h1>
          <h2 className="text-lg text-white">{pet.origin || pet.place_of_found }</h2>
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
          <svg
            className="cursor-pointer"
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </div>
        {Object.entries(pet).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-semibold">{key}:</span>
                <span>{Array.isArray(value) ? value.join(', ') : value}</span>
              </div>
            ))}
      </Modal>
    </>
  );
};

export default PetCard;
