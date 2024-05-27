import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface FilterProps {
  petName: string;
  setPetName: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}
const Filter: React.FC<FilterProps> = ({ petName, setPetName, className }) => {
  const clearFiled = () => {
    setPetName("");
  };
  const handleNameChange = (e: any) => {
    setPetName(e.target.value);
  };
  return (
    <div className={"w-full flex flex-wrap  gap-4 " + className}>
      <Input
        type="text"
        placeholder="Enter the pet's name..."
        className="w-full md:w-1/2"
        name="pet_name"
        onChange={handleNameChange}
        value={petName}
      />
      <Button
        className="w-full md:w-1/5"
        onClick={clearFiled}
        text="Clear Field"
      />
    </div>
  );
};

export default Filter;
