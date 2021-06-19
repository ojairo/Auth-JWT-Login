import api from '../services/api'
export default async function authLogin(user, pass){
  try {
    const res = await api.post('sessions', {
      user,
      pass,
    })
    if(res){
      const token = res.data.token
      const resp = api.get('/users', {headers: {'Authorization': token}})
      if(resp){
        localStorage.setItem('token', token)
        api.defaults.headers.Authorization = token
        return true
      }
    }
  } catch (error) {
    return false
  }
}
