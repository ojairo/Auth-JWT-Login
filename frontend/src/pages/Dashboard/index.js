import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  FiUser,
  FiGrid,
  FiDollarSign,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'

import {
  HiLibrary,
  HiSwitchHorizontal,
  HiTrendingUp,
  HiTrendingDown,
  HiCreditCard,
  HiFlag,
} from 'react-icons/hi'

import {
  ImDroplet,
  ImPower,
  ImConnection,
} from 'react-icons/im'

import {FcSimCardChip} from 'react-icons/fc'

import './styles.css'
import logoAlt from '../../assets/logo-alt.png'
import mastercardImg from '../../assets/mastercard.png'
import AuthDashboard from '../../utils/authDashboard';
import LogOut from '../../utils/logOut';

function Dashboard() {
  const history = useHistory()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token')
      if(token){
        const response = await AuthDashboard(token)
        if(response){
          setLoading(false)
          {document.title = 'Dashboard'}
          return
        }
      }
      setLoading(false)
      return history.push('/')
    })()

  }, [])

  async function handleLogOut(){
    LogOut()
    history.push('/')
  }

  if(loading){
    return (
      <div className="dashContainer">
        <div style={
          {
            display: 'flex',
            width: '100%',
            maxWidth: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
          }
        }>
          <h1 style={
            {
              fontSize: 26,
              color: 'white',
              fontWeight: 'bold'
              }
            }>
            Loading ...
          </h1>
        </div>
      </div>
    )
  }

  return(
    <div className='dashContainer'>
      <header className='verticalHeader'>
        <img src={logoAlt} alt='< J />'/>
        <div className='icons'>
          <div className='iconsBack'>
            <FiUser size={32} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiGrid size={32} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiDollarSign size={32} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiSettings size={32} color= '#FFF'/>
          </div>
        </div>

        <button
          className= 'linkDecoration'
          onClick={handleLogOut}
        >
          <div className='iconLogOut'>
            <FiLogOut size={32} color='#235BE9'/>
            <b>Sair</b>
          </div>
        </button>
      </header>

      <div className='divsContainer'>
        <section className='divGroups'>
          <div className='cashTransations'>
            <div>
              <HiLibrary size={48} color='#FFF'/>
              <p>Saldo disponível</p>
              <b>R$5.689</b>
            </div>

            <div>
              <HiSwitchHorizontal size={48} color='#FFF'/>
              <p>Tranferência bancária</p>
              <b>R$2.786</b>
            </div>

            <div>
              <HiTrendingUp size={48} color='#FFF'/>
              <p>Entrada de dinheiro</p>
              <b>R$1.456</b>
            </div>

            <div>
              <HiTrendingDown size={48} color='#FFF'/>
              <p>Saída de dinheiro</p>
              <b>R$546,50</b>
            </div>

          </div>

          <div className='profile'>
            <section className='profileTitle'>
              <p>Perfil do usuário</p>
              <FiSettings size={22} color='#2F4DF1'/>
            </section>

            <section className='profileData'>
              <div className='divData'>
                <div className='iconBack'>
                  <FiUser size={18} color='#EEEE'/>
                </div>
                <p className='profileName'>Jairo Júnior</p>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <HiCreditCard size={18} color='#EEEE'/>
                </div>
                <p className='dataLines'>
                  Cartão de crédito:
                  <b>0000 0000 **** ****</b>
                </p>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <HiFlag size={18} color='#EEEE'/>
                </div>
                <p className='dataLines'>
                  Bandeira:
                  <b>Mastercard</b>
                </p>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <HiLibrary size={18} color='#EEEE'/>
                </div>
                <p className='dataLines'>
                  Banco:
                  <b>Banco Internacional da Moeda</b>
                </p>
              </div>
            </section>
          </div>

          <div className='bill'>
            <p className="billTitle">
              Contas do mês
            </p>

            <section className='billData'>
              <div className='divData'>
                <div className='iconBack'>
                  <ImDroplet size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <div className='billAndPayment'>
                    <p className='dataLines'>
                      Conta de água
                    </p>
                    <p className='payment'>Pago</p>
                  </div>
                  <b style={{color:'#FFF'}}>R$100,00</b>
                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <ImPower size={16} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <div className='billAndPayment'>
                    <p className='dataLines'>
                      Conta de energia
                    </p>
                    <p className='payment'>Pago</p>
                  </div>
                  <b style={{color:'#FFF'}}>R$100,00</b>
                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <ImConnection size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <div className='billAndPayment'>
                    <p className='dataLines'>
                      Conta de internet
                    </p>
                    <p className='payment'>Pago</p>
                  </div>
                  <b style={{color: '#FFF'}}>R$100,00</b>

                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <HiCreditCard size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <div className='billAndPayment'>
                    <p className='dataLines'>
                      Conta do cartão
                    </p>
                    <p className='payment'>A pagar</p>
                  </div>
                  <b style={{color:'#FFF'}}>R$100,00</b>

                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='serviceSection'>
          <div className='currentServices'>
            <div className='creditCard'>
              <section className='creditHeader'>
                <FcSimCardChip/>
                <ImConnection color='#EEEE'/>
              </section>
              <p className="creditNumber">0000 0000 0000 0000</p>
              <section className='creditFooter'>
                <p className='creditName'>JAIRO JUNIOR</p>
                <img src={mastercardImg} alt='MASTERCARD' />
              </section>
            </div>

            <p className="historyTitle">
              Histórico de transação
            </p>

            <section className="currentTransation">
              <div className="transations">
                <div className="photoTransations">
                  <img src="https://i.pravatar.cc/150?img=3" alt="J"/>
                </div>
                <div className="descTransitions">
                  <p>Pagamento da conta de água</p>
                </div>

                <div className="valueTransitions">
                  <p>R$100,00</p>
                </div>
              </div>
              <div className="transations">
                <div className="photoTransations">
                  <img src="https://i.pravatar.cc/150?img=4" alt="J"/>
                </div>
                <div className="descTransitions">
                  <p>Pagamento da conta de internet</p>
                </div>

                <div className="valueTransitions">
                  <p>R$100,00</p>
                </div>
              </div>
              <div className="transations">
                <div className="photoTransations">
                  <img src="https://i.pravatar.cc/150?img=5" alt="J"/>
                </div>
                <div className="descTransitions">
                  <p>Pagamento do seguro do carro</p>
                </div>

                <div className="valueTransitions">
                  <p>R$890,00</p>
                </div>
              </div>
              <div className="transations">
                <div className="photoTransations">
                  <img src="https://i.pravatar.cc/150?img=7" alt="J"/>
                </div>
                <div className="descTransitions">
                  <p>Pagamento da conta de energia</p>
                </div>

                <div className="valueTransitions">
                  <p>R$100,00</p>
                </div>
              </div>
              <div className="transations">
                <div className="photoTransations">
                  <img src="https://i.pravatar.cc/150?img=9" alt="J"/>
                </div>
                <div className="descTransitions">
                  <p>Pagamento do aluguel da casa</p>
                </div>

                <div className="valueTransitions">
                  <p>R$1.200,00</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;
