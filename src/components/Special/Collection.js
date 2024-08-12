import React from 'react'

function Collection() {
  return (
    <div className="lg:bg-[#EADCBF] bg-[#EADCBF]   ">
         <div className='lg:flex  lg:gap-6'>
          <div>
          <h1 className='text-3xl mt-0 text-start ml-5 lg:ml-20 lg:mt-40'>Our<br/>Collections</h1>
          <p className=' text-[#202020] text-start ml-5 lg:ml-20 '>Watch Your Latest Collections</p>
          </div>
            
           <div className='flex lg:flex gap-2  mt-5 lg:gap-10 lg:mr-32 lg:mt-12 '>
             <div className='lg:ml-52 '>
             <img className=' ml-6 w-40 h-40 rounded-tr-3xl lg:h-96 lg:w-80' src={require("../Images/C5.jpg")}/>
             <p className='pb-8 mt-4 '>Prodcut Name</p>
             </div>
             <div>
             <img className='ml-6 w-40 h-40 rounded-tr-3xl lg:h-96 lg:w-80' src={require("../Images/C3.jpg")}/>
             <p className='pb-8 mt-4 '>Prodcut Name</p>

             </div>
            
            </div>
            

          <div>

        </div>
        
      </div>
         
    </div>
  )
}



export default Collection
