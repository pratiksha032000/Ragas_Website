
import { Carousel } from 'flowbite-react'
import React from 'react'
import Slider1 from './Slider1'



function TwoComponents() {
  return (
    <div className=' lg:flex justify-start lg:gap-16 lg:ml-48 '>
        <div>
           <img className="rounded-xl h-[100%] w-[93%] m-4  mt-40 lg:h-[50%]  lg:w-[100%] lg:ml-20 " src={require('../Images/C10.jpg')}/> 
        </div>
        <div className=' lg:ml-8  lg:mt-20'>
            <div className='lg:h-[100%] lg:w-[100%] lg:mr-40   ' >
                <div className='border border-[#D99A41] rounded-xl m-1 mt-20   '> 
                <img className='h-16 ml-28 mt-16  lg:ml-44' src={require('../Images/quote.png')}/>
                <p className='text-2xl mt-5'>In Their Own Words</p>
                <h1 className='text-4xl'>Happy Customers</h1>
                <div>
                <Slider1/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoComponents