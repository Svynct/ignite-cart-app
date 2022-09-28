import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import homeBackground from '../../../assets/home-background.svg'

import {
  Container,
  BadgeContainer,
  Badge,
  BadgeIcon,
  BannerInfo,
} from './styles'

export function Hero() {
  return (
    <Container>
      <BannerInfo>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <BadgeContainer>
          <Badge>
            <BadgeIcon iconColor="orange">
              <ShoppingCart size={16} weight="fill" />
            </BadgeIcon>
            Compra simples e segura
          </Badge>
          <Badge>
            <BadgeIcon iconColor="gray">
              <Package size={16} weight="fill" />
            </BadgeIcon>
            Embalagem mantém o café intacto
          </Badge>
          <Badge>
            <BadgeIcon iconColor="yellow">
              <Timer size={16} weight="fill" />
            </BadgeIcon>
            Entrega rápida e rastreada
          </Badge>
          <Badge>
            <BadgeIcon iconColor="purple">
              <Coffee size={16} weight="fill" />
            </BadgeIcon>
            O café chega fresquinho até você
          </Badge>
        </BadgeContainer>
      </BannerInfo>

      <img src={homeBackground} alt="Copo de café com fundo amarelo" />
    </Container>
  )
}
