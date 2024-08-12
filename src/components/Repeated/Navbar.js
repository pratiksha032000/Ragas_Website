// import React from 'react'
// import {Link, useState} from 'react-router-dom'



// function Navbar() {
//     const Navbar =() => {
//         const[isOpen, SetIsOpen]= useState(false)
//     }
//   return (
//     <><button onClick={()=> SetIsOpen(!isOpen)}></button>
//     <div>
//           <nav className='flex  lg:space-x-40 bg-[#4E2C1A] h-20 lg:flex  '>
//               <img className='h-16 m-2 ml-7' src={require("../Images/Logo.png")} />
//               <div className="flex">
//                   <ul className='flex  space-x-4 text-white lg:font-semibold lg:ml-0 ml-3 lg:mt-8 lg:text-[80%] lg:text md-flex lg:gap-12   '>
//                       <Link to="./about"><li>
//                           ABOUT_US
//                       </li></Link>
//                       <Link to="./product"><li>
//                           OUR PRODUCTS
//                       </li></Link>

//                       <Link to="./infrastructure"><li>
//                           INFRASTRUCTURE
//                       </li></Link>
//                       <Link to="./management"><li>
//                           OUR MANAGEMENT
//                       </li></Link>
//                       <Link to="./contact"><li>
//                           CONTACT_US
//                       </li></Link>
//                   </ul>
//                   <div className='flex gap-4 lg:mt-7 justify-center lg:ml-16 '>
//                       <img className='border border-[#E4E5E1] rounded-full lg:h-8 hover:bg-[#4E2C1A] ' src={require('../Images/Facebook.png')} />
//                       <img className='border border-[#E4E5E1] rounded-full lg:h-8 hover:bg-[#4E2C1A]' src={require('../Images/Instagram.png')} />
//                       <img className='border border-[#E4E5E1] rounded-full lg:h-8 hover:bg-[#4E2C1A]' src={require('../Images/Twitter.png')} />

//                   </div>

//               </div>

//           </nav>




//       </div></>
//   )
// }

// export default Navbar



import {React,dropdown } from 'react'
import HeroSectionHome from '../Special/HeroSectionHome'


function Navbar(){
    return(
       <><div>
            {/* <HeroSectionHome/>  */}
            <div>
                {/* <img className='bg-cover bg-center h-screen ' src={require("../Images/C7.jpg")} /> */}
                <video className=" bg-blend-overlay h-[85vh] w-screen object-cover lg:h-screen lg:w-screen lg:object-cover md:h-screen md:w-screen md:object-cover bg-black bg-opacity-40 " muted autoPlay>
                    <source src={require("../Video/ChochlateVideo.mp4")} type="video/mp4" />
                </video>
                <div className='absolute w-100 h-100 top-0 mt-34 flex flex-col col-1   text-white lg:ml-96 lg:mt-60 '>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl  ml-4 p-2 mt-60 lg:mt-4 '>
                    Every piece tells a story 
                    </h1>
                    <p className='text-xl text-center md:text-xl lg:text-xl'>Temptation in Every Bite</p>
            
                <div>
            <button className='bg-transparent hover:bg-[#4E2C1A] font-semibold hover:text-white py-3   border border-white hover:border-transparent rounded-full mt-8 ml-3  w-[30%] md:w-[20%] lg:w-[30%]'>EXPLORE</button>
            </div>
            
           </div> 
            </div>
            <nav className='absolute top-0  flex-col items-center justify-between px-12 h-16 gap-8 '>
               <div className='lg:flex'>
               <img className='lg:h-24 lg:w-24 lg:mt-4  h-[50%] w-[50%] mt-3 ml-12 mb-3 lg:ml-0' src={require("../Images/Logo.png")} />
                <div className=''>
                <div className=''>
                    <ul className="lg:flex lg:ml-16 lg:gap-20 text-xs lg:mt-8 font-bold text-white text-start ml-16 ">
                        <li className='py-3'>ABOUT_US</li>
                        <li className='py-3'>OUR PRODUCTS</li>
                        <li className='py-3'>INFRASTRUCTURE</li>
                        <li className='py-3'>OUR MANAGEMENT</li>
                        <li className='py-3'>CONTACT_US</li>
                    </ul>
                    {/* <div className='flex justify-end lg:mt-8 '>
                        <img className='lg:h-[5%] lg:w-[5%] h-[10%] w-[10%] rounded-full' src={require("../Images/Logo.png")} />
                        <img className='lg:h-[5%] lg:w-[5%] h-[10%] w-[10%] rounded-full' src={require("../Images/Logo.png")} />
                        <img className='lg:h-[5%] lg:w-[5%] h-[10%] w-[10%] rounded-full' src={require("../Images/Logo.png")} />

                    </div> */}

                </div>
                </div>
                </div>
                <div className='h-[20%] w-[20%] ml-3  lg:display-none lg:hidden  '>
                    <img className='' src={require("../Images/List.png")} />

                </div>
            </nav>
        </div>
</>
    )
}
export default Navbar

// import React, { useState } from 'react';
// import HeroSectionHome from '../Special/HeroSectionHome';

// function Navbar() {
//   // State to manage the dropdown
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Toggle function for the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <div>
//         {/* <HeroSectionHome/>  */}
//         <div>
//           {/* <img className='bg-cover bg-center h-screen ' src={require("../Images/C7.jpg")} /> */}
//           <video className="bg-blend-overlay h-[85vh] w-screen object-cover lg:h-screen lg:w-screen lg:object-cover md:h-screen md:w-screen md:object-cover bg-black bg-opacity-40" muted autoPlay>
//             <source src={require("../Video/ChochlateVideo.mp4")} type="video/mp4" />
//           </video>
//           <div className='absolute w-100 h-100 top-0 mt-34 flex flex-col col-1 text-white lg:ml-96 lg:mt-60'>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl ml-4 p-2 mt-60 lg:mt-4'>
//               Every piece tells a story
//             </h1>
//             <p className='text-xl text-center md:text-xl lg:text-xl'>Temptation in Every Bite</p>
//             <div>
//               <button className='bg-transparent hover:bg-[#4E2C1A] font-semibold hover:text-white py-3 border border-white hover:border-transparent rounded-full mt-8 ml-3 w-[30%] md:w-[20%] lg:w-[30%]'>
//                 EXPLORE
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <nav className='absolute top-0 flex-col items-center justify-between px-12 h-16 gap-8 '>
//           <div className='lg:flex'>
//             <img className='lg:h-24 lg:w-24 lg:mt-4 h-[100%] w-[80%] mt-3 ml-3 mb-3 lg:ml-0' src={require("../Images/Logo.png")} />
//             <div>
//               <ul className="lg:flex lg:ml-16 lg:gap-20 text-xs lg:mt-8 font-bold text-white text-start ml-3">
//                 <li className='py-3'>ABOUT_US</li>
//                 <li className='py-3 relative'>
//                   <button onClick={toggleDropdown}>
//                     OUR PRODUCTS
//                   </button>
//                   {isDropdownOpen && (
//                     <ul className='absolute top-full left-0 bg-white text-black p-2 mt-1 rounded shadow-lg'>
//                       <li className='py-1 px-3 hover:bg-gray-200'>Product 1</li>
//                       <li className='py-1 px-3 hover:bg-gray-200'>Product 2</li>
//                       <li className='py-1 px-3 hover:bg-gray-200'>Product 3</li>
//                     </ul>
//                   )}
//                 </li>
//                 <li className='py-3'>INFRASTRUCTURE</li>
//                 <li className='py-3'>OUR MANAGEMENT</li>
//                 <li className='py-3'>CONTACT_US</li>
//               </ul>
//             </div>
//           </div>
//           {/* <div className='h-[20%] w-[20%] ml-3 lg:hidden'>
//             <img src={require("../Images/List.png")} />
//           </div> */}
//         </nav>
       
//       </div>
//     </>
//   );
// }

// export default Navbar;




