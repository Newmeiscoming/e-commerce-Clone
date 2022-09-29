import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Newsletter from "../components/Newsletter";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Image = styled.img`
  width: 80%;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:50%;
  margin:30px 0px
`;
const Filter = styled.div`
  margin: 20px 0px; 
  display:flex;
  align-items:center;
`;
const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const FilterSizeOption = styled.option``;
const FilterColor = styled.div`
width:30px;
height:30px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px`;
const AddContainer = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
width:50%;
margin:30px 0px`;
const QuantityContainer = styled.div`
display: flex;
align-items:center;
font-weight:700`;
const Quantity = styled.span`
width:30px;
height:30px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px`;
const Button = styled.button`
border:2px solid teal;
padding:15px;
background-color:white;
font-weight:bolder;
cursor:pointer;
&:hover{
  background-color:#f8f4f4;
}
`;

const ProductInfo = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.ajio.com/medias/sys_master/root/20210403/npjE/6069d216aeb269a9e34a50b2/-473Wx593H-461357580-blue-MODEL2.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>DENIM JUMPSUIT</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio cum
            similique inventore facere perspiciatis commodi consectetur
            quibusdam temporibus, tempore cupiditate eaque excepturi unde illum
            ab officia blanditiis non a delectus illo assumenda est, nisi ipsum
            tempora maxime. Commodi incidunt recusandae ad aliquam excepturi
            magnam suscipit consequatur at. Eaque, soluta nemo.
          </Description>
          <Price> &#x20B9; 1,999</Price>
          <FilterContainer>
            <Filter>
              <FilterText>COLOR</FilterText>
              <FilterColor color="black"/>
              <FilterColor color="lightblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterText>SIZE:</FilterText>
            <FilterSize>
                <FilterSizeOption >XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption disabled selected>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
      <AddContainer>
        <QuantityContainer>
          <span style={{cursor:"pointer", width:"30px",height:"30px", backgroundColor:"lightgray",display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Remove/>
            </span>
          
          <Quantity>1</Quantity>
          <span style={{cursor:"pointer",width:"30px",height:"30px", backgroundColor:"lightgray",display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Add/>
            </span>
        </QuantityContainer>
        <Button>ADD TO CART</Button>
      </AddContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductInfo;
