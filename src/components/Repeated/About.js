import React from 'react'

function About() {
  return (
  <div className=''>
      <div className='lg:flex'>
      <div className=' gap-40 lg:flex '>
           <div className='lg:ml-32'>
             <h1 className='mt-6 text-2xl lg:ml-12'>Brand Family</h1>
             <div className='flex gap-7 mt-6 ml-20 lg:ml-0 lg:mr-28 lg:gap-4'>
              <img src={require('../Images/C6.jpg')} className='lg:rounded-full rounded-full w-24 h-24 lg:w-40 lg:ml-7   border-[#f8ad0b] '/>
              <img src={require('../Images/C6.jpg')} className='rounded-full w-24 h-24  lg:ml-7'/>
             </div>
           </div>
           <div className=' '>
            <h1 className='text-left ml-8 mt-7 text-2xl lg:ml-20' >About Ragas</h1> 
            <p className='text-left ml-8 mt-2 text-xl lg:ml-20'>Leading High End Chochlate<br/>Manufacturing Company in India</p>
            <p className='text-left ml-8 mt-2 mr-4 lg:ml-20'>Chocolate is made from the kernels<br/> of fermented and roasted cocoa beans. The kernels are ground to form a pasty fluid chocolate liquor, which may be hardened in molds to form bitter (baking) chocolate, pressed to reduce the cocoa butter content and then pulverized to make cocoa powder, or mixed with sugar and additional cocoa butter to make sweet (eating) chocolate. </p>
            <div className=''>
            <button class="bg-[#4E2C1A]  text-white font-semibold  py-3 px-8 border border-white  rounded-full  lg:mr-96  mr-2 ">  EXPLORE
            </button>
            </div>
         </div>
      </div>
     
     </div> 
  </div>
  )
}

export default About
