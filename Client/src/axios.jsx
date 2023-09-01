import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'https://us-central1-clone-ben9.cloudfunctions.net/api',
  baseURL:"http://localhost:8100",
  //  "https://us-central1-clone-ben9.cloudfunctions.net/api",
  // http://127.0.0.1:5001/clone-ben9/us-central1/api
});

export default instance;
