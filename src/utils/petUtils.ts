import { petService } from "../services/AnimalService";
import { Pet } from "../types/animal";

export const getPetsByType = async (
  setFilteredPets: (value: React.SetStateAction<Pet[]>) => void,
  setError: (value: React.SetStateAction<string | undefined>) => void,
  pets: Pet[],
  type?: string,
  setPets?: React.Dispatch<React.SetStateAction<Pet[]>>
) => {
  if (type === "birds" || type === "cats" || type === "dogs") {
    try {
      const data = await petService.getPetsByType(type);
      setFilteredPets(data);
      if (setPets) {
        setPets(data);
      }
    } catch (error) {
      console.error(error);
      setError("Error getting pets! Please try again!");
    }
  } else {
    setFilteredPets(pets);
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
    const name = petName.trim()
    const data = await petService.getPetByName(name, type);
    setFilteredPets(data);
  } catch (error) {
    console.error(error);
  }
};
