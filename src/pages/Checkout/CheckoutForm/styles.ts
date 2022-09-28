import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;

  background: #f3f2f2;
  border-radius: 6px;
`

const cardHeaderColors = {
  purple: 'purple-500',
  yellow: 'yellow-700',
} as const

interface CardHeaderProps {
  imgColor: 'purple' | 'yellow'
}

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;

  svg {
    color: ${(props) => props.theme[cardHeaderColors[props.imgColor]]};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    width: 530px;
    height: 44px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    strong {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 560px;
  height: 216px;
`

const formInputSizes = {
  sm: '60px',
  md: '200px',
  l: '276px',
  xl: '348px',
  fitContent: '100%',
} as const

interface FormInputProps {
  customWidth?: 'sm' | 'md' | 'l' | 'xl' | 'fitContent'
}

export const FormInput = styled.input<FormInputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  height: 42px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  ${(props) => {
    if (props.customWidth) {
      return `width: ${formInputSizes[props.customWidth]};`
    }
    return `width: ${formInputSizes.md};`
  }}
`

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 100%;
  height: 42px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 51px;
`

export const PaymentMethod = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  text-transform: uppercase;

  width: 178.67px;
  height: 51px;

  border: 1px solid ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  border: none;

  font-size: 0.75rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme['gray-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &.active {
    background: ${(props) => props.theme['purple-300']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`
