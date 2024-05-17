import React from "react";

const NavBar = () => {
  return (
<nav className="flex  max-w-[1450px] justify-between items-center fixed w-full px-24 py-4">
  <h1 className="text-lg font-bold underline"> <a href="/">#PetExpo</a></h1>
  <ul className="flex gap-4">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/pets">Pets</a>
    </li>
    <li>
      <a href="#about">Rreth Nesh</a>
    </li>
    <li>
      <a href="#contact">Na Kontaktoni</a>
    </li>
    <li>
      <a href="/admin">Admin</a>
    </li>
  </ul>
</nav> 




  );
};

export default NavBar;
