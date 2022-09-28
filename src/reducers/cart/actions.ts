import { Coffee } from '../../models/coffee'
import { Product } from './reducer'

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_ONE_TO_CART = 'ADD_ONE_TO_CART',
  SUBTRACT_FROM_CART = 'SUBTRACT_FROM_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  RESET_CART_STATE = 'RESET_CART_STATE',
}

export function addToCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      ...product,
    },
  }
}

export function addOneToCartAction(coffee: Coffee) {
  return {
    type: CartActionTypes.ADD_ONE_TO_CART,
    payload: {
      ...coffee,
    },
  }
}

export function subtractFromCartAction(productId: number) {
  return {
    type: CartActionTypes.SUBTRACT_FROM_CART,
    payload: {
      productId,
    },
  }
}

export function removeFromCartAction(productId: number) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  }
}

export function resetCartStateAction() {
  return {
    type: CartActionTypes.RESET_CART_STATE,
  }
}
