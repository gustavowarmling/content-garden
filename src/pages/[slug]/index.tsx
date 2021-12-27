import { GetServerSideProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'

import { CategoryHeader } from '../../components/CategoryHeader'
import { ContentGroup } from '../../components/ContentGroup'
import { Footer } from '../../components/Footer'
import { PageWrapper } from '../../styles/general'

type PageData = {
  title: string
  emoji: string
}

type Content = {
  title: string
  image?: string
  slug: string
  tag: string
  link: string
}

type Section = {
  title: string
  hasBanner: boolean
  content: Content[]
}

type CategoryProps = {
  data: PageData
  sections: Section[]
}

export default function Category({ data, sections }: CategoryProps) {
  return (
    <PageWrapper>
      <CategoryHeader title={data.title} image={data.emoji} />

      {sections.map((section) => (
        <ContentGroup
          cards={section.content}
          title={section.title}
          hasBanner={section.hasBanner}
          key={section.title}
        />
      ))}

      <Footer />
    </PageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  if (!params) {
    return {
      props: {
        data: {},
        sections: [],
      },
    }
  }
  const { slug } = params

  const prismic = getPrismicClient(req)

  if (!prismic) {
    return {
      props: {
        data: {},
        sections: [],
      },
    }
  }

  const response = await prismic.getByUID('category', String(slug), {})

  const data = {
    title: RichText.asText(response.data.title),
    emoji: RichText.asText(response.data.emoji),
  }

  const sectionsArray = response.data.body

  if (!sectionsArray) {
    return {
      props: {
        data: {},
        sections: [],
      },
    }
  }

  const sections = sectionsArray.map((section: any) => {
    if (section.slice_type === 'text_cards') {
      return {
        title: RichText.asText(section.primary.section_title),
        hasBanner: false,
        content: section.items.map((item: any) => {
          return {
            title: RichText.asText(item.post_title),
            description: RichText.asText(item.post_description),
            slug: RichText.asText(item.post_title),
            link: item.post_link.url,
          }
        }),
      }
    }

    return {
      title: RichText.asText(section.primary['section-title']),
      hasBanner: true,
      content: section.items.map((item: any) => {
        return {
          title: RichText.asText(item.card_title),
          image: item.card_image.url,
          slug: RichText.asText(item.card_title),
          tag: RichText.asText(item.card_tag),
          link: item.card_link.url,
        }
      }),
    }
  })

  return {
    props: {
      data,
      sections,
    },
  }
}
