import React from "react";
import styled from "styled-components";
import tryPremium from "../assets/images/tryPremium.png";

const Right = () => {
  return (
    <Container>
      <TryPremium>
        <img src={tryPremium} />
      </TryPremium>
      <ConnectsSuggestions>
        <Heading>People You may know:</Heading>
      </ConnectsSuggestions>
    </Container>
  );
};

export default Right;

const Container = styled.div``;

const TryPremium = styled.div`
  cursor: pointer;
`;

const ConnectsSuggestions = styled.div`
background: #FCFDFD;
border-radius: 16px;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #212121;
`;
