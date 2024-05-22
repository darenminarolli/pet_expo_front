import React,{ useState} from 'react'
import Button from './Button';

interface PetCardProps {
  name: string;
  location: string;
  imageUrl: string;
}

const PetCard: React.FC<PetCardProps>  = ({name, location, imageUrl}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-[700px] overflow-hidden rounded-lg shadow-lg group">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src={imageUrl}
      alt={`${name} image`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
    <div className="relative z-10 flex flex-col justify-end h-full p-4">
      <h1 className="text-2xl font-bold text-white">{name}</h1>
      <h2 className="text-lg text-white">{location}</h2>
      <Button onClick={()=>{}} className="min-w-[250px] h-12 self-center justify-center mt-2 px-4 py-2 text-white rounded opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
         More...
      </Button>
    </div>
  </div>
  )
}
export default PetCard
