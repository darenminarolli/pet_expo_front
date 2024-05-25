import React, { useState } from "react";

const CatForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    temperament: "",
    colors: [""],
    description: "",
    image: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...formData.colors];
    newColors[index] = value;
    setFormData({
      ...formData,
      colors: newColors,
    });
  };

  const addColorField = () => {
    setFormData({
      ...formData,
      colors: [...formData.colors, ""],
    });
  };

  const removeColorField = (index: number) => {
    const newColors = formData.colors.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      colors: newColors,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend server
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto py-4 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="secondary-header" >New Cat</h2>
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
                className="ml-2 bg-red-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
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
          Image URL:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          value={formData.image}
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

export default CatForm;
