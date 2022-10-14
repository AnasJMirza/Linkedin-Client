import React from "react";
import styled from "styled-components";
import figmaIcon from '../assets/images/figma.png';
import ux from '../assets/images/ux-design.png';
import add from '../assets/images/more.png';

const PagesInfo = () => {
  return (
    <Container>
      <Item>
        <Logo src={figmaIcon}/>
        <Text>UX Design</Text>
      </Item>
      <Item>
        <Logo src={ux}/>
        <Text>UI Design</Text>
      </Item>
      <Item>
        <Logo src={add}/>
        <Text>Add new page</Text>
      </Item>
      
      
    </Container>
  );
};

export default PagesInfo;

const Container = styled.div`
    
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 15px 0px;
`;
const Logo = styled.img`
    width: 17px;
`;
const Text = styled.div`
  font-size: 16px;
  color: #666666;
`;
