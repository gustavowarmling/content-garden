import styled from 'styled-components'

export const Wrapper = styled.footer`
  margin-top: auto;
`

export const Text = styled.footer`
  color: var(--color-gray-7);
  font-weight: 400;
  font-size: 1.18rem;
  line-height: 1.5rem;

  a {
    color: var(--color-gray-7);
    transition: color 0.25s;
    margin: 0 0.5rem;
    font-weight: 600;

    transition: all 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }
`
