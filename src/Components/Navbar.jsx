import React, { useState, useRef, useEffect } from 'react';
import { ProfileIcon, SchoolName, SchoolNameSmall, MenuIcon } from '../assets/svgIcons';

const Navbar = () => {
  // State to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference for the menu div
  const menuRef = useRef(null);

  // Toggle the menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Array of navigation items with labels and routes
  const navItems = [
    { label: 'MY COURSE', route: '/' },
    { label: 'GROUPS', route: '/' },
    { label: 'Q&A VAULT', route: '/' },
    { label: 'RESOURCES', route: '/' },
    { label: 'SUPPORT', route: '/' },
    { label: 'MY PROFILE', route: '/' },
  ];

  return (
    <div className="w-full h-auto md:px-16 py-5 bg-[#01abef] flex items-center z-50 top-0 left-0 fixed ">
      {/* Left side - School Name & Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <SchoolName />
      </div>
      <div className="md:hidden flex items-center justify-around w-screen">
        <SchoolNameSmall />
        <div onClick={toggleMenu} className="cursor-pointer">
          <MenuIcon />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 justify-end w-screen">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.route}
            className="flex items-center cursor-pointer active:border-b-2 text-[#e4f3fb] text-base font-semibold"
          >
            {item.label}
          </a>
        ))}
        <a

            href={navItems[5].route}><ProfileIcon /></a>

      </div>

      {/* Mobile Menu - Open when menu icon is clicked */}


      <div
        ref={menuRef}
        className={`md:hidden w-3/4 h-screen bg-[#0f3d82]/90 flex flex-col absolute top-0 right-0 z-50 px-8 py-14 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item, index) => (
          <div key={index} className="border-b-2 border-b-white py-5 flex justify-end items-center">
            <a
              href={item.route}
              className="text-white text-lg font-semibold"
            >
              {item.label}
            </a>
            {index === navItems.length - 1 && <div className="pl-6"><ProfileIcon /></div>} {/* Only show ProfileIcon for the last item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
