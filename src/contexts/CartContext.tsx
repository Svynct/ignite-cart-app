import { createContext, ReactNode, useReducer, useEffect } from 'react'

import { cartReducer, Product } from '../reducers/cart/reducer'
import {
  addOneToCartAction,
  addToCartAction,
  removeFromCartAction,
  resetCartStateAction,
  subtractFromCartAction,
} from '../reducers/cart/actions'
import { Coffee } from '../models/coffee'

interface CartContextType {
  products: Product[]
  addToCart: (product: Product) => void
  addOneToCart: (coffee: Coffee) => void
  subtractFromCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  resetCartState: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-cart:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        const products = JSON.parse(storedStateAsJSON) as Product[]

        return {
          products,
        }
      }

      return {
        products: [],
      }
    },
  )

  const { products } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(products)
    localStorage.setItem('@ignite-cart:cart-state-1.0.0', stateJSON)
  }, [products])

  function addToCart(product: Product) {
    dispatch(addToCartAction(product))
  }

  function addOneToCart(coffee: Coffee) {
    dispatch(addOneToCartAction(coffee))
  }

  function subtractFromCart(productId: number) {
    dispatch(subtractFromCartAction(productId))
  }

  function removeFromCart(productId: number) {
    dispatch(removeFromCartAction(productId))
  }

  function resetCartState() {
    dispatch(resetCartStateAction())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        addOneToCart,
        subtractFromCart,
        removeFromCart,
        resetCartState,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
