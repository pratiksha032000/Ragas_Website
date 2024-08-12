import React from 'react'

function HiddenImages() {
  return (
    <div className='mt-20'>
            <div className=''>
                <h1 className='mt-16 text-4xl font-semibold lg:text-6xl '>Our Brand Collection</h1>
            </div>
            <div className='lg:flex lg:ml-32 mr-2'>
                <div className='lg:flex mt-16 lg:gap-4  '>
                <div className='lg:h-[24%] lg:w-[28%] '>
                        <div className=' '>
                            <img className='  bg-blend-overlay rounded-tl-3xl rounded-tr-3xl  ' src={require('../Images/C2.jpg')}/>
                            <button className=' border text-[#52442B] bg-[#EADCC1] rounded-full px-7 py-3  '>VIEW PRODUCTS</button>
                        </div>          
                    </div>
                    <div className='lg:h-[24%] lg:w-[28%] '>
                        <div className=' '>
                            <img className='  bg-blend-overlay rounded-tl-3xl rounded-tr-3xl  ' src={require('../Images/C2.jpg')}/>
                            <button className=' border text-[#52442B] bg-[#EADCC1] rounded-full px-7 py-3  '>VIEW PRODUCTS</button>
                        </div>          
                    </div>
                    <div className='lg:h-[24%] lg:w-[28%] '>
                        <div className=' '>
                            <img className='  bg-blend-overlay rounded-tl-3xl rounded-tr-3xl  ' src={require('../Images/C2.jpg')}/>
                            <button className=' border text-[#52442B] bg-[#EADCC1] rounded-full px-7 py-3  '>VIEW PRODUCTS</button>
                        </div>          
                    </div>
        
                   
                </div>
            </div>   

    

    </div>
    
  )
}

export default HiddenImages
