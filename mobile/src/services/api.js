import axios from 'axios';

const api = axios.create({
  baseURL: 'http://id-9jw.anonymous.mobile.exp.direct:3333'
});

export default api;
