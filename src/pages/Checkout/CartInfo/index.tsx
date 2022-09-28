import { Trash } from 'phosphor-react'
import { useContext, Fragment } from 'react'

import { coffeeImages } from '../../../assets/utils/coffeeImages'
import { SelectQuantity } from '../../../components/SelectQuantity'
import { CartContext } from '../../../contexts/CartContext'
import { Coffee } from '../../../models/coffee'

import {
  Container,
  Card,
  Divider,
  Title,
  CoffeeContainer,
  CoffeeInfo,
  CoffeeDetails,
  CoffeeActions,
  RemoveButton,
  CoffeePriceContainer,
  TotalPriceContainer,
  PriceContainer,
  ConfirmButton,
} from './styles'

export function CartInfo() {
  const { products, addOneToCart, subtractFromCart, removeFromCart } =
    useContext(CartContext)

  const currencyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalPrice = products.reduce((acc, current) => {
    return acc + current.coffee.price * current.quantity
  }, 0)

  const shipping = 3.5

  function handleRemoveButton(productId: number) {
    removeFromCart(productId)
  }

  function handleMinusButton(productId: number) {
    subtractFromCart(productId)
  }

  function handlePlusButton(coffee: Coffee) {
    addOneToCart(coffee)
  }

  return (
    <Container>
      <Title>Cafés selecionados</Title>

      <Card>
        {products.map((product) => (
          <Fragment key={product.coffee.id}>
            <CoffeeContainer>
              <CoffeeInfo>
                <img
                  src={coffeeImages[product.coffee.image]}
                  alt=""
                  width={64}
                  height={64}
                />
                <CoffeeDetails>
                  <p>{product.coffee.name}</p>
                  <CoffeeActions>
                    <SelectQuantity
                      customHeight={32}
                      quantity={product.quantity}
                      onClickMinus={() => handleMinusButton(product.coffee.id)}
                      onClickPlus={() => handlePlusButton(product.coffee)}
                    />
                    <RemoveButton
                      onClick={() => handleRemoveButton(product.coffee.id)}
                    >
                      <Trash size={16} />
                      Remover
                    </RemoveButton>
                  </CoffeeActions>
                </CoffeeDetails>
              </CoffeeInfo>

              <CoffeePriceContainer>
                {currencyFormatter.format(
                  product.coffee.price * product.quantity,
                )}
              </CoffeePriceContainer>
            </CoffeeContainer>

            <Divider />
          </Fragment>
        ))}

        <TotalPriceContainer>
          <PriceContainer>
            <p>Total de itens</p>
            <span>{currencyFormatter.format(totalPrice)}</span>
          </PriceContainer>

          <PriceContainer>
            <p>Entrega</p>
            <span>{currencyFormatter.format(shipping)}</span>
          </PriceContainer>

          <PriceContainer>
            <strong>Total</strong>
            <strong>{currencyFormatter.format(totalPrice + shipping)}</strong>
          </PriceContainer>
        </TotalPriceContainer>

        <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
      </Card>
    </Container>
  )
}
