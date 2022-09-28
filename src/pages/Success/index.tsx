import { useContext } from 'react'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { Container, Content, DeliveryInfo, Header, Info } from './styles'

import illustration from '../../assets/illustration.svg'

export function Success() {
  const { address, paymentMethod } = useContext(CheckoutContext)

  console.log({
    address,
    paymentMethod,
  })

  return (
    <Container>
      <Header>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>

      <Content>
        <DeliveryInfo>
          <Info bgColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {address.street}, {address.number}
                </strong>{' '}
              </p>
              <p>
                {address.neighborhood} - {address.city},{' '}
                {address.uf.toUpperCase()}
              </p>
            </div>
          </Info>

          <Info bgColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </Info>

          <Info bgColor="orange">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </div>
          </Info>
        </DeliveryInfo>

        <img src={illustration} alt="" />
      </Content>
    </Container>
  )
}
