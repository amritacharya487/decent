import axios from 'axios';


const API_BASE_URL = 'https://localhost:7042/api/Authentication';

export const login = async (inputdata)=> {
  try {
    const  response = await axios.post(`${API_BASE_URL}/login`,inputdata);
     // Assuming the server sends back the user data, including userId, upon successful login
     //const userData = response.data;
      return response;
     /*return {
      userData,
       userId: userData.userId,
       // ... other user data you might want to include
     }*/
}
  catch (error)
  {
    throw error;
  }

};


export const signup = async (formdata) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?role=${formdata.role}`, formdata);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};
export default signup;




