import {
  MapPinLine,
  CurrencyDollar,
  Money,
  CreditCard,
  Bank,
} from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { PaymentMethods } from '../../../reducers/checkout/reducer'

import {
  Card,
  CardHeader,
  Container,
  FormContainer,
  FormInput,
  FormInputGroup,
  FormInputsContainer,
  Header,
  PaymentContainer,
  PaymentMethod,
} from './styles'

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | null>(
    null,
  )

  const { register, setValue } = useFormContext()

  function handlePaymentMethod(method: PaymentMethods) {
    setValue('paymentMethod', method)
    setPaymentMethod(method)
  }

  return (
    <Container>
      <Header>
        <strong>Complete seu pedido</strong>
      </Header>

      <FormContainer>
        <Card>
          <CardHeader imgColor="yellow">
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>

          <FormInputsContainer>
            <FormInput type="text" placeholder="CEP" {...register('zipCode')} />
            <FormInput
              type="text"
              placeholder="Rua"
              customWidth="fitContent"
              {...register('street')}
            />
            <FormInputGroup>
              <FormInput
                type="text"
                placeholder="Número"
                {...register('number')}
              />
              <FormInput
                type="text"
                placeholder="Complemento"
                customWidth="xl"
                {...register('complement')}
              />
            </FormInputGroup>

            <FormInputGroup>
              <FormInput
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <FormInput
                type="text"
                placeholder="Cidade"
                customWidth="l"
                {...register('city')}
              />
              <FormInput
                type="text"
                placeholder="UF"
                customWidth="sm"
                {...register('uf')}
              />
            </FormInputGroup>
          </FormInputsContainer>
        </Card>

        <Card>
          <CardHeader imgColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>

          <PaymentContainer>
            <PaymentMethod
              type="button"
              className={
                paymentMethod === PaymentMethods.CREDIT ? 'active' : ''
              }
              onClick={() => handlePaymentMethod(PaymentMethods.CREDIT)}
            >
              <CreditCard size={16} />
              cartão de crédito
            </PaymentMethod>
            <PaymentMethod
              type="button"
              className={paymentMethod === PaymentMethods.DEBIT ? 'active' : ''}
              onClick={() => handlePaymentMethod(PaymentMethods.DEBIT)}
            >
              <Bank size={16} />
              cartão de débito
            </PaymentMethod>
            <PaymentMethod
              type="button"
              className={paymentMethod === PaymentMethods.CASH ? 'active' : ''}
              onClick={() => handlePaymentMethod(PaymentMethods.CASH)}
            >
              <Money size={16} />
              dinheiro
            </PaymentMethod>
          </PaymentContainer>
        </Card>
      </FormContainer>
    </Container>
  )
}
