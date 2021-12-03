import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CardGroup } from '../../components/CardGroup'
import { CategoryHeader } from '../../components/CategoryHeader'
import { ContentGroup } from '../../components/ContentGroup'
import { Footer } from '../../components/Footer'
import { PageWrapper } from '../styles'

import mazePng from '../../public/maze.png'

const Category: NextPage = () => {
  const router = useRouter()

  const { slug } = router.query

  const data = {
    title: 'UX Design',
    image: `✏️`,
    slug: slug,
    hasCategories: false,
    cardsData: [
      { title: 'UX Design', emoji: `✏️`, slug: 'ux-design0' },
      { title: 'UX Design', emoji: `✏️`, slug: 'ux-design1' },
      { title: 'UX Design', emoji: `✏️`, slug: 'ux-design2' },
      { title: 'UX Design', emoji: `✏️`, slug: 'ux-design3' },
      { title: 'UX Design', emoji: `✏️`, slug: 'ux-design4' },
    ],
  }

  const contentSections = [
    {
      title: 'Tools',
      hasBanner: true,
      content: [
        {
          title: 'Maze',
          image:
            'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fpublic%2Fmaze.3a14cc23e503d8f03e8803f435d6cc48.png&w=1920&q=75',
          slug: 'maze0',
          tag: 'Usability test',
          link: 'https://maze.co/',
        },
        {
          title: 'Maze',
          image:
            'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fpublic%2Fmaze.3a14cc23e503d8f03e8803f435d6cc48.png&w=1920&q=75',
          slug: 'maze1',
          tag: 'Usability test',
          link: 'https://maze.co/',
        },
        {
          title: 'Maze',
          image:
            'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fpublic%2Fmaze.3a14cc23e503d8f03e8803f435d6cc48.png&w=1920&q=75',
          slug: 'maze2',
          tag: 'Usability test',
          link: 'https://maze.co/',
        },
      ],
    },
    {
      title: 'Articles',
      hasBanner: false,
      content: [
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'nngroup0',
          link: 'https://nngroup.com/',
        },
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'nngroup1',
          link: 'https://nngroup.com/',
        },
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'nngroup2',
          link: 'https://nngroup.com/',
        },
      ],
    },
    {
      title: 'Books',
      hasBanner: false,
      content: [
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'books0',
          link: 'https://books.com/',
        },
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'books1',
          link: 'https://books.com/',
        },
        {
          title: 'How Long Do Users Stay on Web Pages?',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aperiam.',
          slug: 'books2',
          link: 'https://books.com/',
        },
      ],
    },
  ]

  return (
    <PageWrapper>
      <CategoryHeader title={data.title} image={data.image} />

      {!!data.hasCategories ? (
        <CardGroup cards={data.cardsData} />
      ) : (
        <>
          {contentSections.map((section) => (
            <ContentGroup
              cards={section.content}
              title={section.title}
              hasBanner={section.hasBanner}
              key={section.title}
            />
          ))}
        </>
      )}

      <Footer />
    </PageWrapper>
  )
}

export default Category
