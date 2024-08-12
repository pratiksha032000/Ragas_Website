import React from 'react'
import Navbar from '../components/Repeated/Navbar'
import Footer from '../components/Repeated/Footer'
import HeroSectionHome from '../components/Special/HeroSectionHome'
import Collection from '../components/Special/Collection'
import About from '../components/Repeated/About'
import HiddenImages from '../components/Repeated/HiddenImages'
import Sidebar from '../components/Repeated/SideBar'
import TwoComponents from '../components/Special/TwoComponents'
import Slider1 from '../components/Special/Slider1'
import Cards from '../components/Special/Cards'








function Home() {
  return (
    <div>
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      <HeroSectionHome/>
      <Collection/>
      <About/>

      <HiddenImages/>
      
      <TwoComponents/>
      <Cards/>
      
    
    
      {/* <Footer/> */}
      
    </div>
  )
}

export default Home



