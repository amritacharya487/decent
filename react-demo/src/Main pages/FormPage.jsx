// FormPage.jsx
import "./FormPage.css"
import React, { useState } from 'react';

const FormPage = ({ addDetails }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const details = {
      firstName,
      lastName,
      age,
      gender,
      contact,
      address,
    };

    // Pass the details to the parent component
    addDetails(details);

    // Reset the form
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
    setContact('');
    setAddress('');
  };

  return (
    <div className='Ho'>
      <h2>Add Patient</h2>
      <form  onSubmit={handleSubmit}>
        <label>
          <div>
            First Name:
            <input type="text" value={firstName} placeholder="FirstName" required onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            Last Name:
           <input type="text" value={lastName} placeholder="lasrName " required  onChange={(e) => setLastName(e.target.value)} />
          </div> 
          
        </label>
        <br />
        <label>
         <div>
          <div>
            Age:
            <input type="text" value={age} placeholder="Age" required onChange={(e) => setAge(e.target.value)} /> 
          </div>
          <div>
           Gender:
           <input type="text" value={gender} placeholder="Gender" required onChange={(e) => setGender(e.target.value)} />
          </div>
         </div>
        </label>
        <br />
        <label>
          Contact:
          <input type="text" value={contact} placeholder="Contact " required onChange={(e) => setContact(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} placeholder="Address" required onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Details</button>
      </form>
    </div>
  );
};

export default FormPage;
