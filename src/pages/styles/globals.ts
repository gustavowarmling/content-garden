import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
      --color-primary: #aaa;
      --color-secondary: #aaa;

      --color-gray-0: #f8f9fa;
      --color-gray-1: #f1f3f5;
      --color-gray-2: #e9ecef;
      --color-gray-3: #dee2e6;
      --color-gray-4: #ced4da;
      --color-gray-5: #adb5bd;
      --color-gray-6: #868e96;
      --color-gray-7: #495057;
      --color-gray-8: #343a40;
      --color-gray-9: #212529;

      --color-white: #ffffff;
      --color-black: #000000;

      --shadow-1: 0px 16px 32px rgba(0, 0, 0, 0.08);
      --shadow-2: 0px 24px 40px rgba(0, 0, 0, 0.16);
    }
  
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
        font-font: size 93.75%
    }
    @media (max-width: 720px) {
        font-font: size 87.5%;
    }
  }

  body {
    background: var(--blue-900);
    color: var(--color-black);
    line-height: 24px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  body, input, textarea, select, button {
    font: 1rem;
    font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  }

  ::selection {
    background-color: #38D0C7;
  }
`
