import api from "../services/api";

export default function LogOut(){
  localStorage.clear()
  api.defaults.headers.Authorization = ''
}
