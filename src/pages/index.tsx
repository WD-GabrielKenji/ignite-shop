import { styled } from '../styles'

const Title = styled('h1', {
  backgroundColor: '$green300',
})

export default function Home() {
  return <Title>Hello World!</Title>
}
