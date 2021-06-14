import React, {useState}from 'react';
import logoImg from '../../assets/logo.png'
function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="< OJAIRO />" width="50%"/>

        <form>
          <h1>Faça seu login</h1>
          <input
            placeholder="Usuário"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />

          <input
            placeholder="Senha"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type='password'
          />

          <button>
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login;
