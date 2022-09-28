import { ButtonHTMLAttributes } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { Button } from './styles'

export function ShopButton({
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button onClick={onClick}>
      <ShoppingCart weight="fill" size={22} />
    </Button>
  )
}
