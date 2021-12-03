import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { CardGroup } from '../components/CardGroup'
import { Footer } from '../components/Footer'

import { PageWrapper, Title } from '../styles/general'

import growthSVG from '../public/growth.svg'

const Home: NextPage = () => {
  const cardsData = [
    { title: 'UX Design', emoji: `✏️`, slug: 'ux-design0' },
    { title: 'UX Design', emoji: `✏️`, slug: 'ux-design1' },
    { title: 'UX Design', emoji: `✏️`, slug: 'ux-design2' },
    { title: 'UX Design', emoji: `✏️`, slug: 'ux-design3' },
    { title: 'UX Design', emoji: `✏️`, slug: 'ux-design4' },
  ]

  return (
    <PageWrapper>
      <Head>
        <title>UX Design • Open Style Guide</title>
        <meta
          name="description"
          content="The biggest digital garden of Product Design in all internet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>
        The biggest digital garden of Product Design in all internet.
      </Title>

      <Image
        src={growthSVG}
        alt="Desenho de um garoto regando a planta"
        height="1200px"
        width="1200px"
      />

      <CardGroup cards={cardsData} />

      <Footer />
    </PageWrapper>
  )
}

export default Home
