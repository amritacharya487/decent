// Import React and useState
import React, { useState } from 'react';
import "./TablePage.css";
import FormPage from './FormPage';


// Define the TablePage component
const TablePage = ({ onUpdate, onDelete }) => {
  // Initialize the state for details and editedIndex
  const [details, setDetails] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      gender: 'Male',
      contact: '123-456-7890',
      address: '123 Main St',
      PredictedDisease: 'Common Cold',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 30,
      gender: 'Female',
      contact: '987-654-3210',
      address: '456 Oak St',
      PredictedDisease: 'Influenza',
    },
    // Add more dummy details as needed
  ]);

  const [editedIndex, setEditedIndex] = useState(null);

 

  // Define the handleUpdate function
  const handleUpdate = (index) => {
    // Ensure there is a valid editedIndex before attempting an update
    if (editedIndex !== null && editedIndex >= 0 && editedIndex < details.length) {
      // Make a copy of the details array
      const updatedDetails = [...details];
      // Update the specific detail at the editedIndex
      updatedDetails[editedIndex] = { ...details[editedIndex] };
      // Call the onUpdate callback with the updated details
      onUpdate(updatedDetails);
      // Reset the editedIndex
      setEditedIndex(null);
    }
  };

  // Define the handleDelete function
  const handleDelete = (index) => {
   // Ensure there is a valid index before attempting a delete
   if (index >= 0 && index < details.length) {
    // Make a copy of the details array
    const updatedDetails = [...details];
    // Remove the detail at the specified index
    updatedDetails.splice(index, 1);
    // Call the onDelete callback with the updated details
    onDelete(updatedDetails);
  }
};

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
              <th>Contact</th>
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
                <td>{detail.contact}</td>
                <td>{detail.address}</td>
                <td>{detail.PredictedDisease}</td>
                <td>
                  <button onClick={() => handleUpdate()}>Update</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
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
