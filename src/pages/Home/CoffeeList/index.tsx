import { Coffee, coffeeList, CoffeeType } from '../../../models/coffee'

import {
  Container,
  Badge,
  BadgeButton,
  Header,
  Filter,
  CardList,
  Card,
  ImageContainer,
  CardImage,
  CardBadgeContainer,
  BuyInfo,
  Price,
  Actions,
} from './styles'

import { SelectQuantity } from '../../../components/SelectQuantity'
import { ShopButton } from '../../../components/ShopButton'
import { useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'

import { coffeeImages } from '../../../assets/utils/coffeeImages'

interface CoffeeQuantity extends Coffee {
  formattedPrice: string
  quantity: number
}

export function CoffeeList() {
  const [filter, setFilter] = useState<CoffeeType | null>(null)
  const [coffees, setCoffees] = useState<CoffeeQuantity[]>(
    coffeeList.map((c) => {
      const formatter = new Intl.NumberFormat('pt-BR', {
        minimumSignificantDigits: 3,
      })

      return { ...c, formattedPrice: formatter.format(c.price), quantity: 1 }
    }),
  )

  const filteredCoffees = filter
    ? coffees.filter((coffee) => coffee.types.includes(filter))
    : null

  const { addToCart } = useContext(CartContext)

  function handleClickMinus(coffeeId: number) {
    setCoffees((prevState) => {
      return prevState.map((coffee) => {
        if (coffee.id === coffeeId) {
          if (coffee.quantity === 1) {
            return coffee
          }

          return { ...coffee, quantity: coffee.quantity-- }
        }
        return coffee
      })
    })
  }

  function handleClickPlus(coffeeId: number) {
    setCoffees((prevState) => {
      return prevState.map((coffee) => {
        if (coffee.id === coffeeId) {
          return { ...coffee, quantity: coffee.quantity++ }
        }
        return coffee
      })
    })
  }

  function handleClickShopButton(coffeeId: number) {
    const coffee = coffees.find((c) => c.id === coffeeId)

    if (coffee) {
      addToCart({
        coffee: {
          id: coffee.id,
          description: coffee.description,
          image: coffee.image,
          name: coffee.name,
          price: coffee.price,
          types: coffee.types,
        },
        quantity: coffee.quantity,
      })
    }
  }

  function handleFilterButton(coffeeType: CoffeeType) {
    if (filter === coffeeType) {
      setFilter(null)
    } else {
      setFilter(coffeeType)
    }
  }

  return (
    <Container>
      <Header>
        <strong>Nossos cafés</strong>

        <Filter>
          <BadgeButton
            variant="outline"
            onClick={() => handleFilterButton(CoffeeType.TRADICIONAL)}
            className={filter === CoffeeType.TRADICIONAL ? 'active' : ''}
          >
            tradicional
          </BadgeButton>
          <BadgeButton
            variant="outline"
            onClick={() => handleFilterButton(CoffeeType.ESPECIAL)}
            className={filter === CoffeeType.ESPECIAL ? 'active' : ''}
          >
            especial
          </BadgeButton>
          <BadgeButton
            variant="outline"
            onClick={() => handleFilterButton(CoffeeType.COM_LEITE)}
            className={filter === CoffeeType.COM_LEITE ? 'active' : ''}
          >
            com leite
          </BadgeButton>
          <BadgeButton
            variant="outline"
            onClick={() => handleFilterButton(CoffeeType.ALCOOLICO)}
            className={filter === CoffeeType.ALCOOLICO ? 'active' : ''}
          >
            alcólico
          </BadgeButton>
          <BadgeButton
            variant="outline"
            onClick={() => handleFilterButton(CoffeeType.GELADO)}
            className={filter === CoffeeType.GELADO ? 'active' : ''}
          >
            gelado
          </BadgeButton>
        </Filter>
      </Header>

      <CardList>
        {filteredCoffees &&
          filteredCoffees.map((coffee) => (
            <Card key={coffee.id}>
              <ImageContainer>
                <CardImage>
                  <img
                    src={coffeeImages[coffee.image]}
                    alt={coffee.name}
                    width="120px"
                    height="120px"
                  />
                </CardImage>
              </ImageContainer>

              <CardBadgeContainer>
                {coffee.types.map((type) => (
                  <Badge key={`${coffee.id}-${type}`} variant="fill">
                    {type}
                  </Badge>
                ))}
              </CardBadgeContainer>

              <strong>{coffee.name}</strong>
              <p>{coffee.description}</p>

              <BuyInfo>
                <p>
                  R$ <Price>{coffee.formattedPrice}</Price>
                </p>
                <Actions>
                  <SelectQuantity
                    quantity={coffee.quantity}
                    onClickMinus={() => handleClickMinus(coffee.id)}
                    onClickPlus={() => handleClickPlus(coffee.id)}
                  />
                  <ShopButton
                    onClick={() => handleClickShopButton(coffee.id)}
                  />
                </Actions>
              </BuyInfo>
            </Card>
          ))}

        {!filteredCoffees &&
          coffees.map((coffee) => (
            <Card key={coffee.id}>
              <ImageContainer>
                <CardImage>
                  <img
                    src={coffeeImages[coffee.image]}
                    alt={coffee.name}
                    width="120px"
                    height="120px"
                  />
                </CardImage>
              </ImageContainer>

              <CardBadgeContainer>
                {coffee.types.map((type) => (
                  <Badge key={`${coffee.id}-${type}`} variant="fill">
                    {type}
                  </Badge>
                ))}
              </CardBadgeContainer>

              <strong>{coffee.name}</strong>
              <p>{coffee.description}</p>

              <BuyInfo>
                <p>
                  R$ <Price>{coffee.formattedPrice}</Price>
                </p>
                <Actions>
                  <SelectQuantity
                    quantity={coffee.quantity}
                    onClickMinus={() => handleClickMinus(coffee.id)}
                    onClickPlus={() => handleClickPlus(coffee.id)}
                  />
                  <ShopButton
                    onClick={() => handleClickShopButton(coffee.id)}
                  />
                </Actions>
              </BuyInfo>
            </Card>
          ))}
      </CardList>
    </Container>
  )
}
