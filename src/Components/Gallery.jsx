// src/Components/Gallery.js
import React, { useContext } from 'react';
import CarContext from '../context/CarContext';
import Navbar from './Navbar';

function Gallery() {
  const { cars } = useContext(CarContext);
  console.log(cars,'ashdfk');

  return (
    <div className='h-screen w-screen   '>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 p-2 gap-2 bg-black '>
        {cars.map(car => (
          <div key={car.id} className='bg-black rounded-lg  p-6 border border-slate-700  md:flex  gap-2'>
            <div className='md:bg-cyan-800 p-1 h-48  rounded-lg  '>
            <img
              src={car.image}
              alt={car.model}
              className='w-[40rem] h-full object-cover rounded-full md:rounded-lg sm:rounded-2xl mb-4  border md:border-none lg:border-none sm:border-none'
            />
            </div>
            <div className=' w-full flex flex-col justify-center   h-48  p-1 rounded-lg '>
            <h2 className='text-xl font-bold  text-white'>{car.make} {car.model}</h2>
            <p className='text-white'>Year: {car.year}</p>
            <button className='bg-blue-900 text-white p-1 rounded-lg mt-2'>show more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
