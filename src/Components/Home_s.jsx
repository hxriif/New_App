import React from 'react'
import bg from '../images/bg.jpg'


function HomeS() {
  return (
    <div className='w-screen h-[15rem] bg-cover bg-center flex items-center justify-center flex-col  font-extrabold text-white' style={{ backgroundImage: `url(${bg})` }}>
    <h1>Keeping more than 100 years of</h1>
    <h1>motoring history alive.</h1>
    <button className='text-white mt-3 bg-gray-700 p-3 items-center flex rounded-lg'>JOIN OUR CLUB</button>
</div>
  )
}

export default HomeS
