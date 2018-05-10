import Axios from 'axios';
import { getToken } from './localStorage';

const AxiosAuthBearer = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default AxiosAuthBearer;
