import React from 'react';
import axios from 'axios';
import Login from '../components/Login';

const API_BASE_URL = 'https://localhost:7042/api/Authentication';

export const login = async (inputdata)=> {
  try {
    const  response = await axios.post(`${API_BASE_URL}/login`,inputdata);
    return response.data;
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

