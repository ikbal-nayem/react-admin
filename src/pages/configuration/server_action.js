import axios from '../../util/Api';
import showError from '../../util/showError';


export const confGet = (type)=>{
  const urls = {
    project_list: '/project',
  }
  return new Promise((resolve, reject)=>{
    axios.get(urls[type])
      .then(resp => resolve(resp.data))
      .catch(err=>{
        showError(err)
        reject()
      })
  })
}


export const confPost = (type, form_inputs)=>{
  const urls = {
    project_add: '/project/add'
  }
  return new Promise((resolve, reject)=>{
    axios.post(urls[type], form_inputs)
      .then(resp => resolve(resp.data))
      .catch(err=>{
        showError(err)
        reject()
      })
  })
}
