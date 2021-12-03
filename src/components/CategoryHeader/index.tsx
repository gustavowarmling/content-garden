import { Wrapper } from './styles'

type CategoryHeaderProps = {
  title: string
  image: string
}

export const CategoryHeader = ({ title, image }: CategoryHeaderProps) => {
  return (
    <Wrapper>
      <h6>{image}</h6>
      <h1>{title}</h1>
    </Wrapper>
  )
}
