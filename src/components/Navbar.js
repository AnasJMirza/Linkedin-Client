import React from "react";
import styled from "styled-components";

import logo from "../assets/images/linkedin.svg";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Icons>Icons</Icons>
      <SearchBar>
        <Search>
          <Input type={"text"} placeholder="Search Something..." />
        </Search>
        <SearchIcon>
            <SearchOutlinedIcon />
        </SearchIcon>
      </SearchBar>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  height: 70px;
  border: 1px solid black;
`;

const Logo = styled.div`
    
`;
const Icons = styled.div``;

const SearchBar = styled.div`
  display: flex;
`;
const Search = styled.div`
  height: 35px;
  width: 210px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: #f6f6f6;
  border-radius: 18px 0px 0px 18px;
`;
const SearchIcon = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 172, 255, 0.46);
  border-radius: 0px 18px 18px 0px;
  color: gray;
  cursor: pointer;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f6f6f6;
`;
