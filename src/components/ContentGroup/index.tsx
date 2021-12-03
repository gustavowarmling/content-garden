import Link from 'next/Link'
import { CategoryCard } from '../CategoryCard'

import {
  Wrapper,
  FullWrapper,
  Title,
  ImageWrapper,
  Card,
  Tag,
  TextCard,
} from './styles'

type Card = {
  title: string
  description?: string
  slug: string
  link: string
  image?: string
  tag?: string
}

type CategoryCard = {
  cards: Card[]
  title: string
  hasBanner: boolean
}

export function ContentGroup({ cards, title, hasBanner }: CategoryCard) {
  return (
    <>
      <Title>{title}</Title>
      {hasBanner ? (
        <Wrapper>
          {cards.map((card) => (
            <Link href={card.link} key={card.slug}>
              <Card>
                <ImageWrapper>
                  <img src={card?.image} alt={card.title} />
                </ImageWrapper>

                <section>
                  <h3>{card.title}</h3>
                  <Tag>{card?.tag}</Tag>
                </section>
              </Card>
            </Link>
          ))}
        </Wrapper>
      ) : (
        <FullWrapper>
          {cards.map((card) => (
            <Link href={card.link} key={card.slug}>
              <TextCard>
                <h3>{card.title}</h3>
                <p>{card?.description}</p>
                <span>{card.link}</span>
              </TextCard>
            </Link>
          ))}
        </FullWrapper>
      )}
    </>
  )
}
