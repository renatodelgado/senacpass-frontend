import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #F5F7FA;
    color: #1F2937;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;