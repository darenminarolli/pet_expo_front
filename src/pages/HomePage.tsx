import Layout from "../layouts/Layout";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <section className="w-full flex flex-wrap justify-between my-14 md:my-24 md:py-24  ">
        <div className="md:w-1/3 flex flex-col gap-x-4 ">
          <h1>Pet Expo </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            ipsa accusamus labore totam deleniti laudantium sunt quibusdam,
            nihil vitae officiis incidunt? Expedita repellat ex commodi sequi
            minima illum eligendi blanditiis.
          </p>
          <Button>
            <Link to="/pets/dogs">Explore</Link>
          </Button>
        </div>
        <div className="md:w-1/2 rounded-lg bg-[#dad8d8] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <img
            className="mix-blend-multiply "
            src="https://media.istockphoto.com/id/167580039/photo/group-of-pets-dog-cat-bird-reptile-rabbit.jpg?s=612x612&w=0&k=20&c=4eR0Hm24eedR4AJ46j6b8ZZUACi3GoRYk99QGKFLO20="
            alt="pet image"
          />
        </div>
      </section>
      <AboutUs />
      <Contact />
    </Layout>
  );
};

export default HomePage;
