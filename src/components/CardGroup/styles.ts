import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 32px;

  align-content: center;
  margin-bottom: 15rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
