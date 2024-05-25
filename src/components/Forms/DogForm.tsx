import React, { useState, ChangeEvent, FormEvent } from 'react';

interface DogFormData {
  name: string;
  breed_group: string;
  size: string;
  lifespan: string;
  origin: string;
  temperament: string;
  colors: string[];
  description: string;
  image_path: File | null;
  imageUrl: string;
}

const DogForm: React.FC = () => {
  const [formData, setFormData] = useState<DogFormData>({
    name: '',
    breed_group: '',
    size: '',
    lifespan: '',
    origin: '',
    temperament: '',
    colors: [''],
    description: '',
    image_path: null,
    imageUrl: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...formData.colors];
    newColors[index] = value;
    setFormData({
      ...formData,
      colors: newColors
    });
  };

  const addColorField = () => {
    setFormData({
      ...formData,
      colors: [...formData.colors, '']
    });
  };

  const removeColorField = (index: number) => {
    const newColors = formData.colors.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      colors: newColors
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
      colors: formData.colors.filter(color => color !== '')
    };
    console.log('Form submitted:', formDataToSubmit);
    // Here you would typically send the form data to your backend server
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto py-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className='secondary-header'>New Dog</h2>
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
        <label htmlFor="breed_group" className="block text-sm font-medium text-gray-700">Breed Group:</label>
        <input
          type="text"
          id="breed_group"
          name="breed_group"
          value={formData.breed_group}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size:</label>
        <input
          type="text"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="lifespan" className="block text-sm font-medium text-gray-700">Lifespan:</label>
        <input
          type="text"
          id="lifespan"
          name="lifespan"
          value={formData.lifespan}
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
        <label htmlFor="temperament" className="block text-sm font-medium text-gray-700">Temperament:</label>
        <input
          type="text"
          id="temperament"
          name="temperament"
          value={formData.temperament}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Colors:</label>
        {formData.colors.map((color, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              name={`color-${index}`}
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeColorField(index)}
                className="ml-2 p-2 bg-red-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addColorField}
          className="mt-2 p-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Color
        </button>
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
              className="w-full p-2 h-64 object-cover rounded-md"
            />
          </div>
        )}
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

export default DogForm;
