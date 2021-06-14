import React, {useState}from 'react';
import logoImg from '../../assets/logo.png'
function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handleSubmit(){

  }

  return(
    <div className='loginContainer'>
      <section className='form'>
        <img src={logoImg} alt='< OJAIRO />' width='50%'/>

        <form onSubmit={()=>handleSubmit()}>
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

          <button type='submit' className='buttonForm'>
            Entrar
          </button>
        </form>

        <p className="textSignUp">
          Não possui conta? <b>Registre-se agora.</b>
        </p>
      </section>
    </div>
  )
}

export default Login;
