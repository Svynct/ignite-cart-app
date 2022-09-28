import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 80px;
  gap: 28px;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  width: 526px;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to left, #8047f8, #dbac2c) border-box;
  border: 1px solid transparent;
`

const infoBgColors = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  orange: 'yellow-700',
} as const

interface InfoProps {
  bgColor: 'purple' | 'yellow' | 'orange'
}

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['gray-700']};

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    background: ${(props) => props.theme[infoBgColors[props.bgColor]]};
    border-radius: 1000px;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 102px;
`
