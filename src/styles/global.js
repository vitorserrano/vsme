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
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 36px;
  }

  ul {
    list-style: none;
  }

  p {
    line-height: 1.5;
    margin-bottom: 40px;
    font-size: 18px;
    color: ${(props) => props.theme.paragraph};
  }

  strong {
    color: ${(props) => props.theme.secondary};
  }
`;
