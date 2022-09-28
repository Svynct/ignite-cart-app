import { CheckoutActionTypes } from './actions'

export enum PaymentMethods {
  CREDIT = 'Cartão de Crédito',
  DEBIT = 'Cartão de Débito',
  CASH = 'Dinheiro',
}

interface Address {
  complement?: string | undefined
  number: string
  zipCode: string
  street: string
  neighborhood: string
  city: string
  uf: string
}

export interface CheckoutState {
  address: Address
  paymentMethod: PaymentMethods
}

export function checkoutReducer(state: CheckoutState, action: any) {
  switch (action.type) {
    case CheckoutActionTypes.FINISH_CHECKOUT: {
      return action.payload
    }

    default:
      return state
  }
}
