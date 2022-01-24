import axios from 'axios';

// const url = 'http://192.168.0.111:45644'
const url = 'http://103.205.180.155:45644'

export default axios.create({
  baseURL: url,
  headers: {
    accept: 'application/json'
  }
});

export { url }
