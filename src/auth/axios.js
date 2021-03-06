import Axios from 'axios';

let AxiosCustom = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true
});

AxiosCustom.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export default AxiosCustom;
