import Link from 'next/link'

import { Wrapper, Text } from './styles'

export function Footer() {
  return (
    <Wrapper>
      <Text>
        Developed by
        <Link href="https://www.linkedin.com/in/gustavowarmling/">
          Gustavo Warmling
        </Link>
        and curated by
        <Link href="http://mateusvillain.com/">Mateus Villain</Link>
      </Text>
    </Wrapper>
  )
}
