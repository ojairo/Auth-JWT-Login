import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import api from '../../services/api';
import './styles.css'

function Register() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const [nameVerif, setNameVerif] = useState(false)
  const [emailVerif, setEmailVerif] = useState(false)
  const [userVerif, setUserVerif] = useState(false)
  const [passVerif, setPassVerif] = useState(false)

  const [verif, setVerif] = useState(true)

  const [colorName, setColorName] = useState('white')
  const [colorEmail, setColorEmail] = useState('white')
  const [colorUser, setColorUser] = useState('white')
  const [colorPass, setColorPass] = useState('white')

  async function handleInsert(){
    validateInputs()
    showErrors()
    if(verif){
      console.log('true')
      // const res = await api.post('/users', {
      //   name,
      //   email,
      //   user,
      //   pass
      // })
      // if(res){
      //   setName('')
      //   setEmail('')
      //   setUser('')
      //   setPass('')
      //   return history.push('/')
      // }
    }
    else(console.log('false'))
  }

  function validateInputs(){
    if(name.length > 1){
      setNameVerif(true)
    }
    if(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i.test(email)){
      setEmailVerif(true)
    }
    if(user !== ''){
      setUserVerif(true)
    }
    if(pass.length >= 8){
      setPassVerif(true)
    }
  }

  function showErrors(){
    if(nameVerif === false){
      setColorName('red')
      setName('')
      setVerif(false)
    }
    if(emailVerif === false){
      setColorEmail('red')
      setEmail('')
      setVerif(false)
    }
    if(userVerif === false){
      setColorUser('red')
      setUser('')
      setVerif(false)
    }
    if(passVerif === false){
      setColorPass('red')
      setPass('')
      setVerif(false)
    }
  }

  return (
    <div className="registerContainer">
      <section className='form'>
        <img src={logoImg} alt='< OJAIRO />' width='350'/>

        <form>
          <h1>Faça seu cadastro</h1>
          <p className="description">
            Preencha os campos abaixo para finalizar seu cadastro na aplicação.
          </p>
          <input
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{borderWidth: 2, borderColor: colorName,}}
          />

          <input
            placeholder='E-mail'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{borderWidth: 2, borderColor: colorEmail,}}
          />

          <input
            placeholder='User'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            style={{borderWidth: 2, borderColor: colorUser,}}
          />

          <input
            placeholder='Password (min. 8)'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type='password'
            style={{borderWidth: 2, borderColor: colorPass,}}
          />

          <div className="buttons">
            <button type='button' className='buttonCancel'>
              Cancelar
            </button>

            <button
              type='button'
              className='buttonInsert'
              onClick={() => handleInsert()}
            >
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
