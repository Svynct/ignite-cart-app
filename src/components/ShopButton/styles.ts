import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.background};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
