import React from 'react';
import {
  FiUser,
  FiGrid,
  FiDollarSign,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'

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

        <div className="iconLogOut">
          <FiLogOut size={24} color='#235BE9'/>
          <b>Sair</b>
        </div>
      </header>
      <section className='divGroups'>
        {/* <div className="perfilUser"></div> */}
        {/* <div className="currentMoney"></div> */}
      </section>

      <section className='serviceSection'>
        {/* <div className="currentServices"></div> */}
      </section>
    </div>
  )
}

export default Dashboard;
