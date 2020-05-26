import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />

      <GlobalStyle />
    </>
  );
}
 
export default App;
