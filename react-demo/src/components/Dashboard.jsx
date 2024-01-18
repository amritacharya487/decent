// App.js
import React, { useState } from 'react';
import TablePage from '../Main pages/TablePage';
import FormPage from '../Main pages/FormPage.jsx';


const Dashboard = () => {
  const [details, setDetails] = useState([]);

  const addDetails = (detail) => {
    setDetails([...details, detail]);
  };
 

  return (
    <div>
    < FormPage addDetails={addDetails} />
      
      <TablePage details={details} />
    </div>
   
  );
};

export default Dashboard;
