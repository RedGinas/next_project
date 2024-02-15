import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://next-back-5b0519cbe113.herokuapp.com/',
});
