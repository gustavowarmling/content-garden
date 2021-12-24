import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 32px;

  align-content: center;
  margin-bottom: 6rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const FullWrapper = styled.section`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  align-content: center;
  margin-bottom: 6rem;
`

export const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 2.5rem;
  line-height: 1.2rem;
  letter-spacing: -0.01em;
  margin-bottom: 2.8rem;
`

export const Card = styled.div`
  width: 100%;
  box-shadow: var(--shadow-1);
  text-align: left;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.5s;

  section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &:hover {
    box-shadow: var(--shadow-2);
  }
`

export const TextCard = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  color: var(--color-black);
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: var(--shadow-1);
  text-align: left;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.5s;

  span {
    font-size: 0.8rem;
  }

  &:hover {
    box-shadow: var(--shadow-2);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 220px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }
`

export const Tag = styled.span`
  padding: 6px;
  color: #38d0c7;
  border: 1px solid #38d0c7;
  border-radius: 0.5rem;
  max-width: max-content;
`
