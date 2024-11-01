import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @media screen and (max-width: 1023px) {
      font-size: 0.9rem;
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.font.color['yellow-dark']};
  }

  body {
    background: ${theme.font.color['base-background']};
    color: ${theme.font.color['base-text']};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`}
`;
