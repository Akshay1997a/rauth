import React from "react";
import styled from "styled-components";
import Header from "../Component/Header";

function Home() {
  return (
    <Container>
      <Header />
      <h1>Home</h1>
    </Container>
  );
}

export default Home;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;