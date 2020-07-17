import React from "react";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <div style={{ color: "#fff" }}>내 서랍</div>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(77, 54, 173);
  }
`;

// const Container = styled.div`
//   background-color: rgb(77, 54, 173);
// `;

export default App;
