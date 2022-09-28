import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 54px;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

const badgeColor = {
  outline: {
    color: 'yellow-500',
    background: 'background',
    border: 'yellow-500',
  },
  fill: {
    color: 'yellow-700',
    background: 'yellow-300',
    border: 'yellow-300',
  },
} as const

interface BadgeProps {
  variant: 'outline' | 'fill'
}

export const Badge = styled.span<BadgeProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;

  font-size: 0.625rem;
  border-radius: 100px;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme[badgeColor[props.variant].color]};
  background: ${(props) => props.theme[badgeColor[props.variant].background]};
  border: 1px solid ${(props) => props.theme[badgeColor[props.variant].border]};

  margin-top: 25.5px;
  padding: 4px 8px;
`

export const BadgeButton = styled.button<BadgeProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;

  cursor: pointer;

  font-size: 0.625rem;
  border-radius: 100px;
  font-weight: 700;
  padding: 6px 12px;
  line-height: 130%;

  color: ${(props) => props.theme[badgeColor[props.variant].color]};
  background: ${(props) => props.theme[badgeColor[props.variant].background]};
  border: 1px solid ${(props) => props.theme[badgeColor[props.variant].border]};

  transition: color 0.375s;
  transition: background 0.375s;

  &:hover {
    color: ${(props) => props.theme[badgeColor[props.variant].background]};
    background: ${(props) => props.theme[badgeColor[props.variant].color]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    color: ${(props) => props.theme[badgeColor[props.variant].background]};
    background: ${(props) => props.theme[badgeColor[props.variant].color]};
  }
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px 32px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 16px;

  padding: 24px 20px;

  width: 256px;
  height: 310px;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['gray-100']};

  strong {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const Price = styled.strong`
  font-family: 'Baloo 2' !important;
  font-weight: 800 !important;
  font-size: 1.5rem !important;
  line-height: 130% !important;
  color: ${(props) => props.theme['gray-800']} !important;
`

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;
  margin-top: 13px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`

export const CardImage = styled.div`
  position: absolute;
  left: calc(50% - 120px / 2);
  top: -47.5px;
`

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  padding-top: 40px;
`

export const CardBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
