import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.bgPrimary};
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: inherit;
  }

  .container {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;
  }
`; 