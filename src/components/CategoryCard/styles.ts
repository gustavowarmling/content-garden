import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  box-shadow: var(--shadow-1);
  text-align: left;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.5s;

  h2 {
    margin-top: 16px;
  }

  &:hover {
    box-shadow: var(--shadow-2);
  }
`
