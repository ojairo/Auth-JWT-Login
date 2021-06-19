import {useState} from 'react'

export default function(data){
  const {name, email, user, pass} = data
  const [nameV, setNameV] = useState(false)
  function verif(){
    if(name.length > 1){
      setNameV(true)
    }
    if(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i.test(email) && email !== ''){
      let emailVerif = true
    }
    if(user !== ''){
      let userVerif = true
    }
    if(pass > 8){
      let passVerif = true
    }

    return {nameV}
  }
}
