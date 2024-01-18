import React, { useState } from 'react';

import axios from 'axios';

import './FormPage.css';



const FormPage = ({ addDetails }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleclick = (e) => {
    e.preventDefault();

    const response =  axios.post('https://localhost:7042/api/Patients/store', { symptoms: symptoms.filter(symptom => symptom.trim() !== '') });


    const details = {
      firstName,
      lastName,
      age,
      gender,
      contact,
      address,
      predictedDisease,
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
    setPredictedDisease('');
  };
  const [symptoms, setSymptoms] = useState(Array(5).fill(''));
  const [predictedDisease, setPredictedDisease] = useState('');

  // Define l1 as an array of symptoms
  const l1 = ['None','itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
  'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
  'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
  'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
  'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
  'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
  'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
  'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
  'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
  'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
  'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
  'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
  'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
  'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
  'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
  'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
  'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
  'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze'];

  const handleChange = (index, event) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = event.target.value;
    setSymptoms(newSymptoms);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7042/api/Disease/disease', { symptoms: symptoms.filter(symptom => symptom.trim() !== '') });
      
      if (response.status === 200) {
        const result = response.data;
        console.log('Result:', result);

        setPredictedDisease(result); // Adjust this based on the actual response structure
      } else {
        console.error('Failed to predict disease');
        setPredictedDisease('');
      }
      
      //setPredictedDisease(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  


  return (
    <div className="CombinedForm">
      <h2>Add Patient</h2>
      <form onSubmit={handleclick}>
        <label>
          <div>
            First Name:
            <input type="text" value={firstName} placeholder="FirstName" required onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            Last Name:
            <input type="text" value={lastName} placeholder="LastName" required onChange={(e) => setLastName(e.target.value)} />
          </div>
        </label>
        <br />
        <label>
          <div>
            Age:
            <input type="text" value={age} placeholder="Age" required onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            Gender:
            <input type="text" value={gender} placeholder="Gender" required onChange={(e) => setGender(e.target.value)} />
          </div>
        </label>
        <br />
        <label>
          Contact:
          <input type="text" value={contact} placeholder="Contact" required onChange={(e) => setContact(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} placeholder="Address" required onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <div className="CombinedForm">
      <h2>Disease Prediction Form</h2>
      <form onSubmit={handleSubmit}>
        {Array.from({ length: 5 }).map((_, index) => (
          <label key={index}>
            {`Symptom ${index + 1}: `}
            <select value={symptoms[index]} onChange={(event) => handleChange(index, event)}>
              {l1.map((symptom) => (
                <option key={symptom} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </label>
        ))}
        <button onClick={handleSubmit} type="submit">Predict Disease</button>
        { }
      </form>
    </div>
    <label>Predicted Disease:<input type='text' value={predictedDisease} readOnly /></label>
      <br/>
        <button type="submit">Add Details</button>
      </form>
    </div>
  );
};

export  default  FormPage ;
