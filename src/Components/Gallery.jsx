import React, { useContext } from 'react';
import CarContext from '../context/CarContext';
import './Gallery.css'; 

function Gallery() {
  const { cars } = useContext(CarContext);

  return (
    <div className='h-screen w-screen '>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 bg-black '>
        {cars.map(car => (
          <div key={car.id} className='relative md:rounded-lg border border-slate-700 overflow-hidden p-2 rounded animated-card'>
            <img
              src={car.image}
              alt={car.model}
              className='w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110'
            />
            <div className='absolute top-0 left-4 md:relative md:justify-center p-4 rounded-lg items-center animated-info'>
              <h2 className='font-bold text-yellow-500 text-2xl'>{car.make} {car.model}</h2>
              <p className='text-red-600 font-semibold'>Year: {car.year}</p>
              <button className='bg-blue-900 text-white p-2 rounded-lg mt-2 hover:bg-blue-700 transition-colors duration-300'>Show more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
