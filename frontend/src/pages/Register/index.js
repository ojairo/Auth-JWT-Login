import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import './styles.css'

function Register() {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handleSubmit(){
    e.preventDefault()
  }

  return (
    <div className="registerContainer">
      <section className='form'>
        <img src={logoImg} alt='< OJAIRO />' width='350'/>

        <form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <p className="description">
            Preencha os campos abaixo para finalizar seu cadastro na aplicação.
          </p>
          <input
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            placeholder='User'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />

          <input
            placeholder='Password'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type='password'
          />

          <div className="buttons">
            <button type='submit' className='buttonCancel'>
              Cancelar
            </button>

            <button type='submit' className='buttonInsert'>
              Entrar
            </button>
          </div>

        </form>

        <p className="textSignIn">
          Já possui conta?
          <Link className='textRegister' to='/'>
            <b>Faça seu login.</b>
          </Link>
        </p>
      </section>
    </div>
  )
}

export default Register;
