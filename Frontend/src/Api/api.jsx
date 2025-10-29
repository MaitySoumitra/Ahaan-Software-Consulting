import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // update if your backend is hosted elsewhere
});

export default API;
