import  React, {useState} from 'react';
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
import ProfileForm from './pages/Deatils';
import UserProfile from './pages/profile';
import FormPage from './Main pages/FormPage';
import Form from './Main pages/UpdatePage';
import { Perdict } from './Main pages/Perdict';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('token');
    // Update authentication state to false
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <ToastContainer /> {/* Add ToastContainer here */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login  />}/>
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/form" element={<FormPage />} />
          {/*<Route path="/Dashboard/profile/:username" element={<UserProfile />} />*/}
          <Route path= "/update" element={<ProfileForm/>}/>
          <Route path= "/profile" element={<UserProfile/>}/>
          <Route path= "/PatientsUpdate/:id" element={<Form/>}/>
          <Route path= "/Predict" element={<Perdict/>}/>
          

          
        </Routes>
        <Footer />
      </>
    </div>
  );
};

export default App;

