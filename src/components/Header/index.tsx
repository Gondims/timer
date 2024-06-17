import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import logoGondim from '../../assets/gondim_logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoGondim} alt=""  width={100} height={100}/>
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}