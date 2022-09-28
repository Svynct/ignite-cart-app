import { produce } from 'immer'

import { Coffee } from '../../models/coffee'
import { CartActionTypes } from './actions'

export interface Product {
  coffee: Coffee
  quantity: number
}

export interface CartState {
  products: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const productIndex = state.products.findIndex(
        (product) => product.coffee.id === action.payload.coffee.id,
      )

      if (productIndex < 0) {
        return produce(state, (draft) => {
          draft.products.push(action.payload)
        })
      }

      return produce(state, (draft) => {
        draft.products[productIndex].quantity += action.payload.quantity
      })
    }

    case CartActionTypes.ADD_ONE_TO_CART: {
      const productIndex = state.products.findIndex(
        (product) => product.coffee.id === action.payload.id,
      )

      if (productIndex < 0) {
        return produce(state, (draft) => {
          draft.products.push({ ...action.payload, quantity: 1 })
        })
      }

      return produce(state, (draft) => {
        draft.products[productIndex].quantity++
      })
    }

    case CartActionTypes.SUBTRACT_FROM_CART: {
      const productIndex = state.products.findIndex(
        (product) => product.coffee.id === action.payload.productId,
      )

      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        if (draft.products[productIndex].quantity === 1) {
          draft.products.splice(productIndex, 1)
        } else {
          draft.products[productIndex].quantity -= 1
        }
      })
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      const productIndex = state.products.findIndex(
        (product) => product.coffee.id === action.payload.productId,
      )

      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1)
      })
    }

    case CartActionTypes.RESET_CART_STATE:
      localStorage.removeItem('@ignite-cart:cart-state-1.0.0')
      return { products: [] }

    default:
      return state
  }
}
