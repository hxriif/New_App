import React from 'react'
import fifth from '../images/fifth.jpg'
import signal from '../images/signal.webp'
import road from '../images/road.webp'
import car from '../images/car.webp'

function HomeF() {
  return (
    <div className=' flex flex-col  w-full bg-white p-1'>
                <div>
                    <img src={fifth} alt='first image' className='w-full' />
                </div>
                <div className='flex justify-center gap-5 mt-2 '>
                    <div className='flex flex-col items-center  bg-black text-white  w-64 rounded-lg p-1'>
                        <img src={signal} alt='signal image' className='' />
                        <h1 className='font-semibold text-xl mb-2'>Since 1944</h1>
                        <div className='p-2'>
                            <p className='text-slate-400 text-center'>
                                Our founders have lived their passion for cars since their teens. Our unique experiences and love for the automobile brought us all together. Between us, we have a collection of rare and vintage cars. Do you want to add yours to the rally?
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center  bg-black text-white  w-64 rounded-lg p-1'>
                        <img src={road} alt='signal image' className='' />
                        <h1 className='font-semibold text-xl mb-2'>Where To Find Us</h1>
                        <div className='p-2'>
                            <p className='text-slate-400 text-center'>
                                Between all of our members, we have a diverse exciting collection of unique vehicles. You can catch us all at a local "car nights" every week as well as our monthly meet-up at a new designated location each month!                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center  bg-black text-white  w-64 rounded-lg p-1'>
                        <img src={car} alt='signal image' className='' />
                        <h1 className='font-semibold text-xl mb-2'>What We Look For</h1>
                        <div className='p-2'>
                            <p className='text-slate-400 text-center'>
                                "I've never seen a car I didn't like" is our motto! Sure, we might disagree on the our favorites but all cars pre-1990 are welcome.  We pride ourselves with the diversity our club has to offer. Gear heads to novices are welcome!                            </p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default HomeF
