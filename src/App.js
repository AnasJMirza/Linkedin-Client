import React from "react";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";

function App() {
    return (
      <Container>
        <Navbar />
        <Feed />
      </Container>
    );
  }
  
  export default App;


  const Container = styled.div`
    
  `;