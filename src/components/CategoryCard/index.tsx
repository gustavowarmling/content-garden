import Link from 'next/link'

import { Wrapper } from './styles'

type Card = {
  title: string
  emoji: string
  slug: string
}

export function CategoryCard({ title, emoji, slug }: Card) {
  return (
    <Link href={`/${slug}`}>
      <Wrapper>
        <p>{emoji}</p>
        <h2>{title}</h2>
      </Wrapper>
    </Link>
  )
}
