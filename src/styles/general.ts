import styled from 'styled-components'

export const PageWrapper = styled.main`
  max-width: 1200px;
  min-height: 100vh;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;

  img {
    margin-bottom: 5rem !important;

    @media (max-width: 800px) {
      margin-bottom: 2rem !important;
    }
  }
`

export const Title = styled.h1`
  font-size: 3.563rem;
  line-height: 1.2;
  letter-spacing: -0.04em;
  margin-bottom: 40px;
`
