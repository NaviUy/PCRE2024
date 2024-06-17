// components/NavbarContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [navItems, setNavItems] = useState([
    { label: "Home", href: "#home"}
  ]);

  const addToNav = (newItem) => {
    setNavItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromNav = (itemToRemove) => {
    setNavItems((prevItems) => prevItems.filter((item) => item.label !== itemToRemove.label));
  };

  return (
    <NavbarContext.Provider value={{ navItems, addToNav, removeFromNav }}>
      {children}
    </NavbarContext.Provider>
  );
};
