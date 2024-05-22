import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
<nav className="flex  max-w-[1450px] justify-between items-center fixed w-full px-24 py-4">
  <h1 className="text-lg font-bold underline"> <a href="/">#PetExpo</a></h1>
  <ul className="flex gap-4">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
    Pets
  <ul>
    <li><Link to="/pets/dogs">Dogs</Link></li>
    <li><Link to="/pets/birds">Birds</Link></li>
    <li><Link to="/pets/cats">Cats</Link></li>
  </ul>
</li>
    <li>
      <Link to="#about">Rreth Nesh</Link>
    </li>
    <li>
      <Link to="#contact">Na Kontaktoni</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
</nav> 




  );
};

export default NavBar;
