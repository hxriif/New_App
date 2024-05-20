import React, { createContext, useState } from 'react';
import carsData from '../data/cars';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(carsData);

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;