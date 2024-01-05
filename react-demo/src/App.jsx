
import {  Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route  path='*' element={<Home/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route  path='/Service' element={<Service/>}/>
          <Route  path='/Contact' element={<Contact/>}/>  
          <Route path='/' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />

        </Routes>
       {/* Your other components go here */}
       <Footer />
    </div>
  );
}

export default App;
