import React from "react";
import Layout from "../layouts/Layout";
import Button from "../comopents/ui/Button";
import Filter from "../comopents/Filter";

const AdminPage = () => {
  return (
    <Layout>
      <section className="w-full flex flex-wrap gap-10 my-14 md:my-14 md:py-14 ">
        <div className="w-full flex flex-wrap justify-between items-center">
        <h1 className="section-header ">#Admin Page</h1>
        <Button className="w-1/6">Create New +</Button>
        </div>
        <div className="w-full  flex  justify-between items-center mt-6 md:mt-24 ">
            <h1 className="secondary-header">Filters:</h1>
        <Filter className='float-right'/>
        </div>
        <div className="w-full flex flex-col bg-slate-50 rounded-lg shadow-lg">
         
        </div>

      </section>
    </Layout>
  );
};

export default AdminPage;
