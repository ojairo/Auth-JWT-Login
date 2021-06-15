import React, {useState}from 'react';
import {Link, useHistory} from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import './styles.css'

function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const history = useHistory()

  function handleSubmit(e){
    e.preventDefault()
    history.push('/dashboard')
  }

  return(
    <div className='loginContainer'>
      <section className='form'>
        <img src={logoImg} alt='< OJAIRO />' width='350'/>

        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <input
            placeholder='Usuário'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />

          <input
            placeholder='Senha'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type='password'
          />

          <button type='submit' className='button'>
            Entrar
          </button>
        </form>

        <p className="textSignIn">
          Não possui conta?
          <Link className='textRegister' to='/register'>
            <b>Registre-se agora.</b>
          </Link>
        </p>
      </section>
    </div>
  )
}

export default Login;
