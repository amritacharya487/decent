import  React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import UserProfile from './pages/profile';
import FormPage from './Main pages/FormPage';





const App =() => {
  
  return (
    <div className="App">
      <> 
      <Navbar />
        <Routes>
          <Route  path='*' element={<Home/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route  path='/Service' element={<Service/>}/>
          <Route  path='/Contact' element={<Contact/>}/>  
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Dashboard' exact element={<Dashboard/>} />
          <Route path="/form" element={FormPage} />
          <Route path='/Dashboard/profile/:username' element={<UserProfile/>} />
          
        </Routes>
       {/* Your other components go here */}
       
       
      
      </>
      <Footer />
    </div>
  );
}

export default App;
