import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    switch (location.hash) {
      case '#about':
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`flex justify-between items-center rounded-lg fixed w-full px-4 py-4 bg-white shadow-lg z-50 max-w-[1450px] mx-auto transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-lg font-bold underline">
        <Link to="/">#PetExpo</Link>
      </h1>
      <ul className="hidden md:flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative group">
          <button className="focus:outline-none">Pets</button>
          <ul className="absolute left-0 w-48 bg-white border rounded shadow-lg hidden group-hover:block">
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/pets/dogs">Dogs</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/pets/birds">Birds</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/pets/cats">Cats</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="/#about">Rreth Nesh</a>
        </li>
        <li>
          <a href="/#contact">Na Kontaktoni</a>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">Menu</button>
      </div>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
          <li className="px-4 py-2">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="relative group px-4 py-2">
            <button className="focus:outline-none w-full text-left">Pets</button>
            <ul className="pl-4 mt-2 bg-gray-50 border rounded shadow-lg hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/pets/dogs" onClick={toggleMenu}>Dogs</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/pets/birds" onClick={toggleMenu}>Birds</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/pets/cats" onClick={toggleMenu}>Cats</Link>
              </li>
            </ul>
          </li>
          <li className="px-4 py-2">
            <a href="/#about" onClick={toggleMenu}>Rreth Nesh</a>
          </li>
          <li className="px-4 py-2">
            <a href="/#contact" onClick={toggleMenu}>Na Kontaktoni</a>
          </li>
          <li className="px-4 py-2">
            <Link to="/admin" onClick={toggleMenu}>Admin</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
