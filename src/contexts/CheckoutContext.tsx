import { createContext, ReactNode, useReducer } from 'react'
import { finishCheckoutAction } from '../reducers/checkout/actions'

import { checkoutReducer, CheckoutState } from '../reducers/checkout/reducer'

interface CheckoutContextType extends CheckoutState {
  finishCheckout: (checkout: CheckoutState) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    address: null,
    paymentMethod: null,
  })

  const { address, paymentMethod } = checkoutState

  function finishCheckout(checkout: CheckoutState) {
    dispatch(finishCheckoutAction(checkout))
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        paymentMethod,
        finishCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
