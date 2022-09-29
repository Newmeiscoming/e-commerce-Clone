import { Favorite, SearchOutlined, ShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Info = styled.div`
opacity:0;
width:100%;
height:100%;
border-radius:30px;
position:absolute;
top:0;
left:0;
z-index: 3;
display:flex;
align-items: center;
justify-content: center;
background-color:rgb(0,0,0,0.2);
transition: all 0.5s ease;
cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 400px;
  border-radius:30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position:relative;
  &:hover ${Info}{
    opacity:1;
  }
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;


const Circle = styled.div`
width:250px;
height:250px;
border-radius:50%;
background-color:coral;
position:absolute`;
const Icon = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color:white;
border-radius:50%;
margin: 0px 10px;
padding:10px;
transition: all 0.3s ease;
&:hover{
  background-color: #e9f5f5;
  transform:scale(1.1);
  cursor:pointer;
}`;
const Product = ({ data }) => {
  return (
    <Container>
      <Circle />
      <Image src={data.img} />
      <Info>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <Favorite />
        </Icon>
        <Icon>
          <ShoppingCart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
