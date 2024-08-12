// // import { Dropdown } from 'flowbite-react'
// // import React from 'react'

// // function SideBar() {
// //   return (
// //     <div>
// //         <div>
// //             <ul className='text-xl bg-[#FEFFFB] '>
// //                 <li>
                    
// //                     <img className='h-40 w-40 p-2 mt-8 ml-16 mb-5'  src={require('../Images/Logo.png')}/>
                    
// //                 <li className='text-[#E4E5E1]'>___________________________________________________________________________________</li>
// //                 </li>
// //                 <li className='pt-4 mr-72 font-semibold '>ABOUT_US</li>
// //                 <li className='text-[#E4E5E1]'>___________________________________________________________________________________</li>
// //                 <li className='pt-4 mr-60 font-semibold'>OUR PRODUCTS</li>
// //                 <li className='text-[#E4E5E1]'>___________________________________________________________________________________</li>

// //                 <div>
// //                  <li className='pt-4 mr-48 font-semibold'>OUR MANAGEMENT</li>
// //                 </div>
// //                 <li className='text-[#E4E5E1]'>___________________________________________________________________________________</li>

// //                 <li className='pt-4 mr-64 font-semibold'>CONTACT_US</li>
// //                 <li className='text-[#E4E5E1]'>___________________________________________________________________________________</li>

// //                 <div className='flex gap-4 mt-7 justify-center '>
// //                     <img className='border border-[#E4E5E1] rounded-full h-12 hover:bg-[#4E2C1A] ' src={require('../Images/Facebook.png')}/>
// //                     <img className='border border-[#E4E5E1] rounded-full h-12 hover:bg-[#4E2C1A]'src={require('../Images/Instagram.png')}/>
// //                     <img className='border border-[#E4E5E1] rounded-full h-12 hover:bg-[#4E2C1A]' src={require('../Images/Twitter.png')}/>

                    

// //                 </div>


// //             </ul>
// //         </div>
// //     </div>
// //   )
// // }

// // export default SideBar



// import React, { useState } from 'react';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

// const SideBar = () => {
//     let Links =[
//         {name:"HOME",link:"/"},
//         {name:"SERVICE",link:"/"},
//         {name:"ABOUT",link:"/"},
//         {name:"CONTACT",link:"/"},
//       ];
//       let [open, setOpen] =useState(false);

//       return (
//         <div className='shadow-md w-full fixed top-0 left-0'>
//            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//             {/* logo section */}
//             <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
//                 <BookOpenIcon className='w-7 h-7 text-blue-600'/>
//                 <span>Inscribe</span>
//             </div>
//             {/* Menu icon */}
//             <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
//                 {
//                     open ? <XMarkIcon/> : <Bars3BottomRightIcon />
//                 }
//             </div>
//             {/* linke items */}
//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//                 {
//                     Links.map((link) => (
//                     <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//                         <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
//                     </li>))
//                 }
//                 <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
//             </ul>
//             {/* button */}
//            </div>
//         </div>
//     );
//     };

//     export default SideBar;