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
    setNavItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      // Ensure the items are ordered based on a predefined list
      const order = ['Home', 'Agenda', 'Venue', 'Speakers', 'Residents', 'Organizers'];
      return updatedItems.sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label));
    });
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
