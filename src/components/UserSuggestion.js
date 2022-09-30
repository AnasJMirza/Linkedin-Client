import React from 'react';
import styled from 'styled-components';

const UserSuggestion = () => {
    return (
        <Container>
        <UserInfo>
            <Img src="https://avatars.githubusercontent.com/u/90819686?v=4" />
            <Text>
                <Name>Anas Javed</Name>
                <Desc>Developer</Desc>
            </Text>
            
        </UserInfo>
        <Button>Connect</Button>
      </Container>
    );
};

export default UserSuggestion;

const Container = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Text = styled.div``;
const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* On Surface / High Emphasis */

  color: #212121;
`;
const Desc = styled.div`
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height */

  /* On Surface / High Emphasis */

  color: #212121;
`;
const Button = styled.div`
  background: #ffffff;
  border: 1px solid #00acff;
  border-radius: 8px;
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
    cursor: pointer;
  color: #00acff;
`;


