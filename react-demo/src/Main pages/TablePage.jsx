// Import React and useState
import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./TablePage.css";
import axios from 'axios';


// Define the TablePage component
const TablePage = () => {
  // Initialize the state for details and editedIndex
  const [details, setDetails] = useState([]);

const token= localStorage.getItem('token');
const config={
  headers:{
    Authorization:`${token}`,
    //UserId: `${userId}`,
  }
}

useEffect(() => {
  const token = localStorage.getItem('token');
      
  if (!token) {
    console.error('User ID not found in local storage.');
    return;
  }
  // Fetch the list of patients for the logged-in user when the component mounts
  const fetchPatients = async () => {
    try {
     


      // Make sure to replace '/api/patients/my-patients' with your actual endpoint
      const result = await axios.get('https://localhost:7042/api/Patients/my-patients', {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming you are using JWT and passing the token in the Authorization header
        },
      });

      // Update the state with the fetched patient data
      setDetails(result.data);
    } catch (error) {
      console.error('Error fetching patients', error);
    
    }
  };

  fetchPatients();
}, []); 
 
  // Render the TablePage component
  return (
    <div className="TablePageContainer">
      <div className="TablePage">
        <h2>Details Table</h2>
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              {/* <th>Contact</th> */}
              <th>Address</th>
              <th>Predicted Disease</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.firstName}</td>
                <td>{detail.lastName}</td>
                <td>{detail.age}</td>
                <td>{detail.gender}</td>
                {/* <td>{detail.contact}</td> */}
                <td>{detail.address}</td>
                <td>{detail.predictedDisease}</td>
                <td>
                  <button ><Link to={`/PatientsUpdate/${detail.id}`} className='link'>Update</Link></button>
                  <button /*onClick={() => handleDelete(index)}*/>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the TablePage component
export default TablePage;
