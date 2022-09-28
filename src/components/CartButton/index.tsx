import { ButtonHTMLAttributes, useContext } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { Button, BadgeContainer, Badge } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function CartButton({
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { products } = useContext(CartContext)

  const itens = products.reduce((acc, current) => {
    return acc + current.quantity
  }, 0)

  return (
    <Button onClick={onClick}>
      {itens > 0 && (
        <BadgeContainer>
          <Badge>{itens}</Badge>
        </BadgeContainer>
      )}
      <ShoppingCart weight="fill" size={22} />
    </Button>
  )
}
