import { useNavigate } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

import { ActionsContainer, Header, Location } from './styles'
import logo from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

export function Navbar() {
  const navigate = useNavigate()

  return (
    <Header>
      <img src={logo} alt="" onClick={() => navigate('/')} />
      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </Location>
        <CartButton onClick={() => navigate('/checkout')} />
      </ActionsContainer>
    </Header>
  )
}
