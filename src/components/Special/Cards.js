import React from 'react'
import { Card } from "flowbite-react";

function Cards() {
  return (
    <div>
      <div className='h-screen w-screen lg:w-screen lg:h-[40%] bg-blend-overlay '>
        <img className=' top-11 mt-32' src={require("../Images/C3.jpg")} /> 
        <div className='absolute w-100 h-100 top-0 flex flex-col col-1   text-white  '>
            <h1 className='text-3xl md:text-5xl lg:text-5xl  ml-4 p-2 mt-60 '>
            Every piece tells a story 
            </h1>
            <p className='text-xl text-center md:text-xl lg:text-xl'>
            Temptation in Every Bite
            </p>
            
           <div>
            <button className='bg-transparent hover:bg-[#4E2C1A] font-semibold hover:text-white py-3   border border-white hover:border-transparent rounded-full mt-8 ml-3  w-[30%] md:w-[20%] lg:w-[30%]'>EXPLORE</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Cards
