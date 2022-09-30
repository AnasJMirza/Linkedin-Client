import React from "react";
import styled from "styled-components";
import tryPremium from "../assets/images/tryPremium.png";
import UserSuggestion from "./UserSuggestion";

const Right = () => {
  return (
    <Container>
      <TryPremium>
        <img src={tryPremium} />
      </TryPremium>
      <ConnectsSuggestions>
        <Heading>People You may know:</Heading>
        <UserSuggestion />
        <UserSuggestion />
        <UserSuggestion />
      </ConnectsSuggestions>
    </Container>
  );
};

export default Right;

const Container = styled.div`
    
`;

const TryPremium = styled.div`
  cursor: pointer;
`;

const ConnectsSuggestions = styled.div`
  background: #fcfdfd;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #212121;
  padding: 0px 20px;
  padding-top: 20px;
`;
