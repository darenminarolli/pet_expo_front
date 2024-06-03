/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { petService } from "../../services/AnimalService";
import { Dog } from "../../types/animal";
import SecondaryButton from "../ui/SecondaryButton";

interface DogFormProps {
  pet?: Dog;
}

const DogForm: React.FC<DogFormProps> = ({  pet }) => {
  const [formData, setFormData] = useState<Dog>({
    image: null,
    type_of_pet: "dogs",
    name: "",
    breed_group: "",
    size: "",
    lifespan: "",
    origin: "",
    temperament: "",
    colors: [""],
    description: "",
  });

  useEffect(() => {
    if (pet) {
      setFormData({
        ...formData,
        ...pet,
        colors: JSON?.parse(String(pet?.colors)) || [""],
        image: null,
      });
    }
  }, [pet]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...(formData.colors || [""])];
    newColors[index] = value;
    setFormData({
      ...formData,
      colors: newColors,
    });
  };

  const addColorField = () => {
    setFormData({
      ...formData,
      colors: [...(formData.colors || [""]), ""],
    });
  };

  const removeColorField = (index: number) => {
    console.log("removeColorField", index);
    if (formData?.colors) {
      const newColors = formData.colors.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        colors: newColors,
      });
    }
  };
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formDataToSend = new FormData(form);
    formDataToSend.append("type_of_pet", formData.type_of_pet);
    const colors = JSON.stringify(formData.colors);
    formDataToSend.append("colors", colors);

    try {
      if (pet && pet._id) {
       const updatedPet =await petService.updatePet(pet._id, formDataToSend);
       if(updatedPet) window.location.reload();
      } else {
        const newPet = await petService.createPet(formDataToSend);
        if(newPet) window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mx-auto py-4 bg-white shadow-md rounded-lg space-y-4"
      >
        <h2 className="secondary-header">Dog Form</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
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
          <label
            htmlFor="breed_group"
            className="block text-sm font-medium text-gray-700"
          >
            Breed Group:
          </label>
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
          <label
            htmlFor="size"
            className="block text-sm font-medium text-gray-700"
          >
            Size:
          </label>
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
          <label
            htmlFor="lifespan"
            className="block text-sm font-medium text-gray-700"
          >
            Lifespan:
          </label>
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
          <label
            htmlFor="origin"
            className="block text-sm font-medium text-gray-700"
          >
            Origin:
          </label>
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
          <label
            htmlFor="temperament"
            className="block text-sm font-medium text-gray-700"
          >
            Temperament:
          </label>
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
          <label className="block text-sm font-medium text-gray-700">
            Colors:
          </label>
          {Array.isArray(formData.colors) && formData.colors.map((color, index) => (
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
                  <SecondaryButton
                    type="button"
                    onClick={() => removeColorField(index)}
                    className="ml-2 p-2 bg-red-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </SecondaryButton>
                )}
              </div>
            ))}
          <SecondaryButton
            type="button"
            onClick={addColorField}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Color
          </SecondaryButton>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
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
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={!pet}
          />
        </div>
        <SecondaryButton
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {pet ? "Update" : "Submit"}
        </SecondaryButton>
      </form>
    </div>
  );
};

export default DogForm;
