import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #121214;
    color: #E1E1E6;
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    font-size: 36px;
  }

  ul {
    list-style: none;
  }
`;