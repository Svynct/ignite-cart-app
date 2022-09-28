import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartInfo } from './CartInfo'
import { CheckoutForm } from './CheckoutForm'
import { PaymentMethods } from '../../reducers/checkout/reducer'

import { FormContainer } from './styles'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Informe o CEP.'),
  street: zod.string().min(1, 'Informe a Rua.'),
  number: zod.string().min(1, 'Informe o Número.'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o Bairro.'),
  city: zod.string().min(1, 'Informe a Cidade.'),
  uf: zod.string().min(1, 'Informe a UF.'),
  paymentMethod: zod.nativeEnum(PaymentMethods),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { finishCheckout } = useContext(CheckoutContext)
  const { resetCartState } = useContext(CartContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit } = checkoutForm

  function handleFinishCheckout(data: CheckoutFormData) {
    const {
      city,
      neighborhood,
      number,
      street,
      paymentMethod,
      uf,
      zipCode,
      complement,
    } = data

    finishCheckout({
      address: {
        city,
        neighborhood,
        number,
        street,
        uf,
        zipCode,
        complement,
      },
      paymentMethod,
    })

    resetCartState()

    navigate('/checkout/success')
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleFinishCheckout)}>
      <FormProvider {...checkoutForm}>
        <CheckoutForm />
        <CartInfo />
      </FormProvider>
    </FormContainer>
  )
}
