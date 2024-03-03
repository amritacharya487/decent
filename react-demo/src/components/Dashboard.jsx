// Dashboard.js
import React, { useState } from 'react';
import TablePage from '../Main pages/TablePage';
import FormPage from '../Main pages/FormPage.jsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [details, setDetails] = useState([]);
  const [activePage, setActivePage] = useState('table'); // Set the default to 'table'

  const addDetails = (detail) => {
    setDetails([...details, detail]);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <div  style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => handlePageChange('table')}>My patient</button>
        <button style={buttonStyle} ><Link to="/form" style={linkStyle}>Add Patient</Link></button>
      </div>

      {activePage === 'form' && <FormPage addDetails={addDetails} />}
      {activePage === 'table' && <TablePage details={details} />}


    </div>
    
  );
};
// Inline styles
const linkStyle={
  textDecoration: 'none',
  color: 'white'
};

const buttonContainerStyle = {
  display: 'flex',
  //justifyContent: 'space-around',
  padding: '10px',
  marginBottom: '20px',
};


const buttonStyle = {
  width: '10%',
  padding: '16px',
  marginTop: '16px',
  marginLeft: '16px',
  alignItems: 'center',
  fontSize: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
// Hover effect
   ':hover': {
    backgroundColor: '#0056b3',
  },
};


export default Dashboard;
