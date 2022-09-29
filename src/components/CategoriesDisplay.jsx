import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
flex:1;
margin:5px;
height:70vh;
position:relative;
`;
const ImageContainer = styled.img`
width:100%;

border-radius:55px`;
const InfoContainer = styled.div`
position:absolute;
top:0;
left:0;
margin-top:300px;
color:white;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column`;
const Title = styled.h1``;
const Button = styled.button`
border:none;
padding:10px;
font-size:30px;
cursor:pointer`;
const CategoriesDisplay = ({data}) => {
  return (
        <Container>
        <ImageContainer src={data.img}/>
        <InfoContainer>
            <Title>{data.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Container>
  )
}

export default CategoriesDisplay;