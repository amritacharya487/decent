import React, { useState } from 'react';
import "./TablePage.css";

const TablePage = ({ details, onEdit, onUpdate, onDelete }) => {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    // Set the edited index to open the modal for the selected row
    setEditedIndex(index);
  };

  const handleUpdate = () => {
    // Implement your update logic here using the editedIndex
    // For example, you can update the details in the state or send an API request
    // After updating, close the modal by resetting the editedIndex
    onUpdate(editedIndex);
    setEditedIndex(null);
  };

  const handleDelete = (index) => {
    // Implement your delete logic here using the index parameter
    // For example, you can delete the details in the state or send an API request
    onDelete(index);
  };

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
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
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

export default TablePage;
