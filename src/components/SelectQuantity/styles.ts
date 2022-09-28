import styled from 'styled-components'

interface ContainerProps {
  customHeight?: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-900']};

  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 38px;
  border-radius: 6px;

  ${(props) => {
    if (props.customHeight) {
      return `height: ${props.customHeight}px;`
    }
  }}
`

export const Counter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['purple-700']};

  cursor: pointer;
`
