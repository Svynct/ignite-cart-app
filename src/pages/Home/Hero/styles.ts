import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 56px;
  margin-top: 92px;
`

export const BannerInfo = styled.div`
  width: 588px;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    font-stretch: 100;
    line-height: 130%;
    margin-top: 16px;
  }
`

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.27fr;
  gap: 20px 40px;
  line-height: 130%;
  margin-top: 66px;
`

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const BadgeColors = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  orange: 'yellow-700',
  gray: 'gray-700',
} as const

interface BadgeIconProps {
  iconColor: 'purple' | 'yellow' | 'orange' | 'gray'
}

export const BadgeIcon = styled.span<BadgeIconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme[BadgeColors[props.iconColor]]};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
`
