import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { CardGroup } from '../components/CardGroup'
import { Footer } from '../components/Footer'

import { PageWrapper, Title } from '../styles/general'

import growthSVG from '../public/growth.svg'

type Data = {
  title: string
  svg: string
}

type Category = {
  slug: string
  title: string
  emoji: string
}

interface HomeProps {
  homeProps: Data[]
  categories: Category[]
}

export default function Home({ homeProps, categories = [] }: HomeProps) {
  // const cardsData = [
  //   { title: 'UX Design', emoji: `✏️`, slug: 'ux-design0' },
  //   { title: 'UX Design', emoji: `✏️`, slug: 'ux-design1' },
  //   { title: 'UX Design', emoji: `✏️`, slug: 'ux-design2' },
  //   { title: 'UX Design', emoji: `✏️`, slug: 'ux-design3' },
  //   { title: 'UX Design', emoji: `✏️`, slug: 'ux-design4' },
  // ]

  const { svg, title } = homeProps[0]

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

      <Title>{title}</Title>

      <Image
        src={growthSVG}
        alt="Desenho de um garoto regando uma planta"
        height="1200px"
        width="1200px"
      />

      <CardGroup cards={categories} />

      <Footer />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const homeResponse = await prismic?.query(
    [Prismic.predicates.at('document.type', 'home')],
    {
      fetch: ['home.title', 'home.svg'],
      pageSize: 1,
    }
  )

  const categoriesResponse = await prismic?.query(
    [Prismic.predicates.at('document.type', 'category')],
    {
      fetch: ['category.uid', 'category.title', 'category.emoji'],
      pageSize: 10,
    }
  )

  const homeProps = homeResponse?.results.map((home) => {
    const { title, svg } = home.data

    return {
      title: RichText.asText(title),
      svg: svg.url,
    }
  })

  const categories = categoriesResponse?.results.map((category) => {
    const { title, emoji } = category.data

    return {
      slug: category.uid,
      title: RichText.asText(title),
      emoji: RichText.asText(emoji),
    }
  })

  return {
    props: {
      homeProps,
      categories,
    },
  }
}
