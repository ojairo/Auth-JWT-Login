import React from 'react';
import { Link } from 'react-router-dom';
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
  HiDotsVertical,
} from 'react-icons/hi'

import {
  ImDroplet,
  ImPower,
  ImConnection,
  ImCreditCard,
} from 'react-icons/im'

import './styles.css'
import logoAlt from '../../assets/logo-alt.png'

function Dashboard() {
  return(
    <div className='dashContainer'>
      <header className='verticalHeader'>
        <img src={logoAlt} alt='< J />'/>
        <div className='icons'>
          <div className='iconsBack'>
            <FiUser size={24} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiGrid size={24} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiDollarSign size={24} color= '#FFF'/>
          </div>
          <div className='iconsBack'>
            <FiSettings size={24} color= '#FFF'/>
          </div>
        </div>

        <Link className= 'linkDecoration' to='/'>
          <div className='iconLogOut'>
            <FiLogOut size={24} color='#235BE9'/>
            <b>Sair</b>
          </div>
        </Link>
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
              <HiDotsVertical size={22} color='#2F4DF1'/>
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
                  <p className='dataLines'>
                    Conta de água
                  </p>
                  <b style={{color:'#FFF'}}>R$100,00</b>
                  <b style={{color: '#2F4DF1'}}>PAGO</b>
                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <ImPower size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <p className='dataLines'>
                    Conta de energia
                  </p>
                  <b style={{color:'#FFF'}}>R$100,00</b>
                  <b style={{color: '#770000'}}>A PAGAR</b>
                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <ImConnection size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <p className='dataLines'>
                    Conta de Internet
                  </p>
                  <b style={{color: '#FFF'}}>R$100,00</b>
                  <b style={{color: '#2F4DF1'}}>PAGO</b>
                </div>
              </div>

              <div className='divData'>
                <div className='iconBack'>
                  <HiCreditCard size={18} color='#EEEE'/>
                </div>
                <div className="billPayments">
                  <p className='dataLines'>
                    Conta do cartão
                  </p>
                  <b style={{color:'#FFF'}}>R$100,00</b>
                  <b style={{color: '#770000'}}>A PAGAR</b>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='serviceSection'>
          <div className="currentServices">

          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;
