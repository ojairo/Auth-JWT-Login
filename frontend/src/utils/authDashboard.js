import api from "../services/api";
export default async function AuthDashboard(token){
  try {
    const res = await api.get('/users', {headers: {'Authorization': token}})
    if(res){
      return true
    }
    return false
  } catch (err) {
    return false
  }
}
