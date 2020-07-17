import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ color: "#fff" }}>내 서랍</div>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(77, 54, 173);
  }
`;

const theme = {
  color: {},
  size: {},
};

export default App;
