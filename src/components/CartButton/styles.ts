import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`

export const BadgeContainer = styled.div`
  display: inline-block;
  position: relative;
  padding-top: 40px;
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 20px;
  height: 20px;
  right: -35px;
  top: -8px;

  background: ${(props) => props.theme['yellow-700']};
  text-align: center;
  border-radius: 1000px;
  color: ${(props) => props.theme.white};

  font-size: 0.75rem;
`
