import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  gap: 820px;

  img {
    cursor: pointer;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  flex: 1;
  height: 38px;
  font-size: 0.875rem;
  line-height: 130%;

  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  border-radius: 6px;

  p {
    color: ${(props) => props.theme['purple-700']};
  }
`
