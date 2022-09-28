import { CheckoutState } from './reducer'

export enum CheckoutActionTypes {
  FINISH_CHECKOUT = 'FINISH_CHECKOUT',
}

export function finishCheckoutAction(checkout: CheckoutState) {
  return {
    type: CheckoutActionTypes.FINISH_CHECKOUT,
    payload: {
      ...checkout,
    },
  }
}
