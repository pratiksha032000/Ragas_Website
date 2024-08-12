import React from 'react'


function HeroSectionHome() {
  return (
    <div className='mt-0'>
        <div className='bg-blend-overlay h-[85vh] lg:h-[100vh] absolute left-0 right-0  w-screen bg-black bg-opacity-40   '> </div>
        <video  className= "h-[85vh] w-screen object-cover lg:h-screen lg:w-screen lg:object-cover md:h-screen md:w-screen md:object-cover " muted autoPlay >
            <source src={require("../Video/ChochlateVideo.mp4")} type="video/mp4"/>
        </video>
       <div className='flex justify-center'>
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

export default HeroSectionHome