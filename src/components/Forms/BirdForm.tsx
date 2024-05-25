import React, { useState, ChangeEvent, FormEvent } from 'react';

interface BirdFormData {
  name: string;
  image_path: File | null;
  imageUrl: string;
  description: string;
  origin: string;
  species: string;
  family: string;
  habitat: string;
  place_of_found: string;
  diet: string;
  weight_kg: number;
  height_cm: number;
}

const BirdForm: React.FC = () => {
  const [formData, setFormData] = useState<BirdFormData>({
    name: '',
    image_path: null,
    imageUrl: '',
    description: '',
    origin: '',
    species: '',
    family: '',
    habitat: '',
    place_of_found: '',
    diet: '',
    weight_kg: 0,
    height_cm: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'weight_kg' || name === 'height_cm' ? parseFloat(value) : value
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image_path: file,
          imageUrl: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        image_path: null,
        imageUrl: ''
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = {
      ...formData,
    };
    console.log('Form submitted:', formDataToSubmit);
    // Here you would typically send the form data to your backend server
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto py-4 bg-white shadow-md rounded-lg space-y-4">
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
        <label htmlFor="image_path" className="block text-sm font-medium text-gray-700">Image:</label>
        <input
          type="file"
          id="image_path"
          name="image_path"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        {formData.imageUrl && (
          <div className="mt-2">
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        )}
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
        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin:</label>
        <input
          type="text"
          id="origin"
          name="origin"
          value={formData.origin}
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
        <label htmlFor="place_of_found" className="block text-sm font-medium text-gray-700">Place of Found:</label>
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
        <label htmlFor="weight_kg" className="block text-sm font-medium text-gray-700">Weight (kg):</label>
        <input
          type="number"
          id="weight_kg"
          name="weight_kg"
          value={formData.weight_kg}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="height_cm" className="block text-sm font-medium text-gray-700">Height (cm):</label>
        <input
          type="number"
          id="height_cm"
          name="height_cm"
          value={formData.height_cm}
          onChange={handleChange}
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
  );
};

export default BirdForm;
