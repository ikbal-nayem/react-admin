import axios from 'util/Api';
import showError from 'util/showError';


export const hotelLogin = (form_inputs)=>{                        // Login
  return new Promise((resolve, reject)=>{
    axios.post('/hotel/login', form_inputs)
      .then(resp => resolve(resp.data))
      .catch(err=>{
        showError(err)
        reject(err)
      })
  })
}

export const getUserInfo = ()=>{                          // get user information
  return new Promise((resolve, reject)=>{
    axios.get('/hotel/token')
      .then(resp => resolve(resp.data))
      .catch(err=>{
        showError(err)
        reject(err)
      })
  })
}