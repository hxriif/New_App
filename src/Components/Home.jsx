import React from 'react'
import Navbar from './Navbar'
import HomeF from './Home_f'
import HomeS from './Home_s'




function Home() {
    return (
        <div className='h-screen w-screen '>
            <div className='h-[7rem] '>
                <Navbar />
            </div>
            <div className='w-screen'>
               <HomeF/>
            </div>
            <div className='w-screen'>
            <HomeS/>
            </div>

        </div>
    )
}

export default Home
