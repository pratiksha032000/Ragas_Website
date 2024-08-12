import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import About_us from './Pages/About_us';
import Contact_us from './Pages/Contact_us';
import Infrastructure from './Pages/Infrastructure'
import OurManagement from './Pages/OurManagement'

function App() {
  return (
    <div className="App">
      
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About_us/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/infrastructure" element={<Infrastructure/>}/>
          <Route path="/management" element={<OurManagement/>}/>
          <Route path="/contact" element={<Contact_us/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
