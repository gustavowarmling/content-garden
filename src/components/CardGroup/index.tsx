import { CategoryCard } from '../CategoryCard'

import { Wrapper } from './styles'

type Card = {
  title: string
  emoji: string
  slug: string
}

type CategoryCard = {
  cards: Card[]
}

export function CardGroup({ cards }: CategoryCard) {
  return (
    <Wrapper>
      {cards.map((card) => (
        <CategoryCard
          key={card.slug}
          title={card.title}
          slug={card.slug}
          emoji={card.emoji}
        />
      ))}
    </Wrapper>
  )
}
