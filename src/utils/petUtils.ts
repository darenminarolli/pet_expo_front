import { petService } from "../services/AnimalService";
import { Pet } from "../types/animal";

export const getPetsByType = async (
  setPets: (value: React.SetStateAction<Pet[]>) => void,
  setFilteredPets: (value: React.SetStateAction<Pet[]>) => void,
  setError: (value: React.SetStateAction<string | undefined>) => void,
  type?: string
) => {
  if (type === "birds" || type === "cats" || type === "dogs") {
    try {
      const data = await petService.getPetsByType(type);
      setPets(data);
      setFilteredPets(data);
    } catch (error) {
      console.error(error);
      setError("Error getting pets! Please try again!");
    }
  } else {
    setError("Invalid pet type");
  }
};

export const getPetByName = async (
  petName: string,
  setFilteredPets: (value: React.SetStateAction<Pet[]>) => void,
  pets: Pet[],
  type?: string
) => {
  if (petName === "") {
    setFilteredPets(pets);
    return;
  }

 
    try {
      const data = await petService.getPetByName(petName);
      setFilteredPets(data);
    } catch (error) {
      console.error(error);
    }
  
};



