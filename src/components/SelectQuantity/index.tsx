import { Minus, Plus } from 'phosphor-react'

import { Container, Counter } from './styles'

interface SelectQuantityProps {
  customHeight?: number
  quantity?: number
  onClickMinus: () => void
  onClickPlus: () => void
}

export function SelectQuantity({
  customHeight = 38,
  quantity = 1,
  onClickMinus,
  onClickPlus,
}: SelectQuantityProps) {
  return (
    <Container customHeight={customHeight}>
      <Counter onClick={onClickMinus}>
        <Minus size={14} />
      </Counter>
      {quantity}
      <Counter onClick={onClickPlus}>
        <Plus size={14} />
      </Counter>
    </Container>
  )
}
