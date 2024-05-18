import React from 'react'

function Navbar() {
  return (
    <div className='bg-white h-full flex flex-col items-center justify-center gap-4 w-full'>
              <div>
                 <h1 className='font-bold italic font-great-vibes text-5xl'>Collectors</h1>
              </div>
              <div className='flex w-auto gap-7 font-thin text-sm'>
                <button className='text-black hover:underline'>HOME</button>
                <button className='text-black hover:underline'>GALLERY</button>
                <button className='text-black hover:underline'>EVENTS</button>
                <button className='text-black hover:underline'>CONTACT US</button>
              </div>
        </div>
  )
}

export default Navbar
