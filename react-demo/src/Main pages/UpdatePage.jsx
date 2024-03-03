import React, { useState,useEffect } from 'react';
import './UpdatePage.css'; // Import CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Form = () => {
  const { id } = useParams(); // Get the patient ID from URL parameters

  //const[id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const navigate= useNavigate();


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://localhost:7042/api/Patients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data;
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setAge(userData.age);
        setGender(userData.gender);
        setAddress(userData.address);
        setContact(userData.contact);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
  
    fetchProfileData();
  }, [id]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.put(`https://localhost:7042/api/Patients/update/${id}`, {
        firstName,
        lastName,
        age,
        gender,
        contact,
        address,
        predictedDisease,
        symptoms: symptoms.filter(symptom => symptom.trim() !== ''),
        userId,
      });
      if (response.status === 200) {
        console.log('Patient details updated successfully:', response.data);
        toast.success('Patient updated successfully');

        navigate('/Dashboard');
      } else {
        console.error('Failed to update patient details');
        toast.error('Error While Updating');

      }
      setFirstName('');
      setLastName('');
      setAge('');
      setGender('');
      setContact('');
      setAddress('');
      setSymptoms(Array(5).fill(''));
      setPredictedDisease('');
    } catch (error) {
      console.error('Error updating patient details:', error);
    }
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

  const symptomsChange = (index, event) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = event.target.value;
    setSymptoms(newSymptoms);
  };

  const handleclick = async (event) => {
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
    <div className="form-container">
      <h2>Enter Your Information</h2>
      <form onSubmit={handleSubmit}>
        <div className='name'>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        </div>
        <div className='details'>
        <div className="age">
          <label >Age</label>
          <input  type='text' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <input type='text' id="gender" name="gender" value={gender} required onChange={(e) => setGender(e.target.value)}>
            </input>
                </div>
        </div>
        <div className='contact'>
        <div className="address">
          <label htmlFor="address">Address</label>
          <input type='text' name="address" value={address} required onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="number">
          <label htmlFor="contact">Contact</label>
          <input type="text" id="contact" name="contact" value={contact} required  onChange={(e) => setContact(e.target.value)} />
        </div>
        </div>
        
        <br />
        <div className="CombinedForm">
        <h2>Disease Prediction Form</h2>  
        <form onSubmit={handleSubmit}>
        {Array.from({ length: 5 }).map((_, index) => (
          <label key={index}>
            {`Symptom ${index + 1}: `}
            <select value={symptoms[index]} onChange={(event) => symptomsChange(index, event)}>
              {l1.map((symptom) => (
                <option key={symptom} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </label>
        ))}
        
        <button onClick={handleclick} type="submit">Predict Disease</button>
        { }
      </form>
    </div>
    <label>Predicted Disease:<input type='text' value={predictedDisease} /></label>
      <br/>


        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default Form;
