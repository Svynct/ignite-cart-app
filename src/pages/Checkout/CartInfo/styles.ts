import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 448px;
`

export const Title = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme['gray-800']};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  width: 100%;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`

export const Divider = styled.div`
  width: 368px;
  height: 0px;
  border: 1px solid ${(props) => props.theme['gray-400']};
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;

  width: 368px;
  height: 80px;

  background: ${(props) => props.theme['gray-100']};
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;

  width: 255px;
  height: 64px;
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 61px;

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 32px;
`

export const RemoveButton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 32px;
  border: none;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['gray-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CoffeePriceContainer = styled.strong`
  display: flex;
  align-items: center;
  text-align: right;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-700']};
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  height: 92px;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  height: 21px;
  width: 100%;

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  strong {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ConfirmButton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  height: 46px;
  width: 100%;
  border: none;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;

  transition: background 0.375s;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
