import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 96px; }
  body { margin: 0; background: ${theme.colors.paper}; color: ${theme.colors.ink}; font-family: ${theme.fonts.primary}; line-height: 1.5; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
  body::before { content: ''; position: fixed; inset: 0; pointer-events: none; opacity: .2; background-image: radial-gradient(${theme.colors.ink} 0.6px, transparent 0.6px); background-size: 15px 15px; mask-image: linear-gradient(to bottom, black, transparent 70%); z-index: -1; }
  ::selection { background: ${theme.colors.lime}; color: ${theme.colors.ink}; }
  a { color: inherit; text-decoration: none; }
  button, input { font: inherit; }
  button { color: inherit; }
  img { max-width: 100%; display: block; }
  h1, h2, h3, p { margin-top: 0; }
  .container { width: min(${theme.maxWidth}, calc(100% - 40px)); margin-inline: auto; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  :focus-visible { outline: 3px solid ${theme.colors.orange}; outline-offset: 4px; }
  @media (max-width: 600px) { .container { width: min(calc(100% - 24px), ${theme.maxWidth}); } }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }
`;
