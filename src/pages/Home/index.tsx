import { CoffeeList } from './CoffeeList'
import { Hero } from './Hero'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero />
      <CoffeeList />
    </Container>
  )
}
