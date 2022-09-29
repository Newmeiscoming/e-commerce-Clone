import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from "@material-ui/core";

const Container = styled.div`

  height: 60px;

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 33.3333333333%;
  display:flex;
  align-items:center
`;
const Center = styled.div`
  width: 33.3333333333%;
`;
const Right = styled.div`
  width: 33.3333333333%;
  display:flex;
  align-items:center;
  justify-content:flex-end
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
const SearchDiv = styled.div`
  border: 1px solid lightgray;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-left:25px;
  padding:5px;
  width:300px
`;
const Input = styled.input`
border:none;
width:300px;
font-weight:bolder`;
const Logo = styled.h1`
font-weight:bold;
text-align:center;
font-size:35px`;
const MenuItems = styled.div`
font-size:20px;
margin-left:100px`

export const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchDiv>
                <Input/>
                <Search style={{color:"gray",fontSize:"16px"}}/>
            </SearchDiv>
          </Left>
          <Center><Logo>ABHI.</Logo></Center>
          <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign-In</MenuItems>
          <MenuItems><Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlined color="action" />
      </Badge></MenuItems>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};
