import React, {useState, useContext, useEffect}from 'react';
import {Link, useHistory} from 'react-router-dom'
import authLogin from '../../utils/authLogin';

import logoImg from '../../assets/logo.png'
import './styles.css'
import api from '../../services/api';

function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [colorBorder, setColorBorder] = useState('white')
  const history = useHistory()

  useEffect(() => {
    api.defaults.headers.Authorization = ''
    localStorage.clear()
  }, [])

  async function handleLogin(){
    const res = await authLogin(user, pass)
    if(res){
      return history.push('/dashboard')
    }
    return setColorBorder('#ff2b2b')
  }

  return(
    <div className='loginContainer'>
      <section className='form'>
        <img src={logoImg} alt='< OJAIRO />' width='350'/>

        <form>
          <h1>Faça seu login</h1>
          <input
            placeholder='Usuário'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            style={{borderWidth: 2, borderColor: colorBorder,}}
          />

          <input
            placeholder='Senha'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type='password'
            style={{borderWidth: 2, borderColor: colorBorder,}}
          />

          <button
            type='button'
            className='button'
            onClick={() => handleLogin()}
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login;
