import React, { useState } from 'react';
import { petService } from '../../services/AnimalService';

interface DogFormProps{
  setSelectedType: React.Dispatch<React.SetStateAction<string>>
}

const DogForm:React.FC<DogFormProps>= ({setSelectedType}) => {
const [formData, setFormData] = useState({
  image: null,
  type_of_pet: 'birds',
  name: '',
  species: '',
  family: '',
  habitat: '',
  place_of_found: '',
  diet: '',
  wingspan_cm:'',
  weight_kg:'',
  description: '',
});

const handleChange = (e:any) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleImageChange = (e:any) => {
  const file = e.target.files[0];
  setFormData({ ...formData, image: file });
};

const handleSubmit = async (e:any) => {
  e.preventDefault();
  const form = e.target;
  const formDataToSend = new FormData(form);
  formDataToSend.append('type_of_pet', formData.type_of_pet);
  try {
    const response = await petService.createPet(formDataToSend)
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }finally{
    setSelectedType('')
  }
};

return (
  <div>
  <form  encType="multipart/form-data" onSubmit={handleSubmit} className="mx-auto py-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className='secondary-header'>New Bird</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species:</label>
        <input
          type="text"
          id="species"
          name="species"
          value={formData.species}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="family" className="block text-sm font-medium text-gray-700">Family:</label>
        <input
          type="text"
          id="family"
          name="family"
          value={formData.family}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="habitat" className="block text-sm font-medium text-gray-700">Habitat:</label>
        <input
          type="text"
          id="habitat"
          name="habitat"
          value={formData.habitat}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="place_of_found" className="block text-sm font-medium text-gray-700">Place of found:</label>
        <input
          type="text"
          id="place_of_found"
          name="place_of_found"
          value={formData.place_of_found}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="diet" className="block text-sm font-medium text-gray-700">Diet:</label>
        <input
          type="text"
          id="diet"
          name="diet"
          value={formData.diet}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="wingspan_cm" className="block text-sm font-medium text-gray-700">Wingspan in CM:</label>
        <input
          type="text"
          id="wingspan_cm"
          name="wingspan_cm"
          value={formData.wingspan_cm}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="weight_kg" className="block text-sm font-medium text-gray-700">Weight in KG:</label>
        <input
          type="text"
          id="weight_kg"
          name="weight_kg"
          value={formData.weight_kg}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          // accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </form>
  </div>
);
};


export default DogForm;
