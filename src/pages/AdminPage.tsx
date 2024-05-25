import React, { useState } from "react";
import Layout from "../layouts/Layout";
import Button from "../comopents/ui/Button";
import Filter from "../comopents/Filter";
import SecondaryButton from "../comopents/ui/SecondaryButton";
import SecondaryCard from "../comopents/ui/SecondaryCard";

const AdminPage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  return (
    <Layout>
      <section className="w-full flex flex-wrap gap-10 my-14 md:my-14 md:py-14 ">
        <div className="w-full flex flex-wrap justify-between items-center">
          <h1 className="section-header ">#Admin Page</h1>
          <Button className="md:w-1/6">Create New +</Button>
        </div>
        <div className="w-full mt-6 md:mt-24 flex flex-wrap ">
          <div className="w-full flex">
            <h1 className="secondary-header">Filters:</h1>
            <Filter className="justify-center" />
          </div>
          <div className=" w-full flex gap-4 flex-wrap md:flex-nowrap justify-end my-6 md:my-14">
            <SecondaryButton
              onClick={() => setSelectedType("Dogs")}
              className="w-full md:w-1/4 bg-yellow-500 text-slate-50 "
            >
              Dogs 🐶
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType("Cats")}
              className="w-full md:w-1/4 bg-blue-500 text-slate-50"
            >
              Cats 😼
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType("Birds")}
              className="w-full md:w-1/4 bg-red-500 text-slate-50"
            >
              Birds 🦜
            </SecondaryButton>
            <SecondaryButton
              onClick={() => setSelectedType(null)}
              className="w-full md:w-1/4 bg-rose-100  text-black"
            >
              All 🐶 😼 🦜
            </SecondaryButton>
          </div>
        </div>
        {selectedType && <h2>Pet Selected: {selectedType}</h2>}

        <div className="w-full p-4 flex flex-col bg-slate-50 rounded-lg drop-shadow-xl ">
           <SecondaryCard/>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPage;
