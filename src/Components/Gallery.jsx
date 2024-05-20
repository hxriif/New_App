// src/Components/Gallery.js
import React, { useContext } from 'react';
import CarContext from '../context/CarContext';
import Navbar from './Navbar';

function Gallery() {
  const { cars } = useContext(CarContext);
  console.log(cars,'ashdfk');

  return (
    <div className='h-screen w-screen '>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 p-2 gap-2 bg-black'>
        {cars.map(car => (
          <div key={car.id} className='bg-black rounded-lg shadow-lg p-6 border border-slate-700  '>
            <div>
            <img
              src={car.image}
              alt={car.model}
              className='w-full h-48 object-cover rounded-md mb-4'
            />
            </div>
            <div className=' w-full flex flex-col items-center gap-2'>
            <h2 className='text-xl font-bold mb-2 text-white'>{car.make} {car.model}</h2>
            <p className='text-white'>Year: {car.year}</p>
            <button className='bg-white text-black p-1 rounded-lg'>show more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
