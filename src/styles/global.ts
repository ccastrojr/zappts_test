import { createGlobalStyle } from 'styled-components';

const backgroundColor = '#fff';
const fontStyle = 'sans-serif';
const highlighedFontWeight = 500;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${backgroundColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', ${fontStyle};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${highlighedFontWeight};
  }

  button {
    cursor: pointer;
  }
`;
