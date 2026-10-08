import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body { margin: 0; min-width: 320px; }
  html { scroll-behavior: smooth; }
  h1, h2 { font-family: Georgia, serif; }
  a { text-underline-offset: 4px; }
  section { scroll-margin-top: 24px; }
`