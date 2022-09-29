import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display:flex`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
padding:20px`;
const Center = styled.div`
flex:1;
padding:20px`;
const Right = styled.div`
flex:1;
padding:20px`;
const Logo = styled.h1`
font-size:50px`;
const Description = styled.p`
margin:20px 0px`;
const SocialMediaIcons = styled.div`
display:flex;
margin:20px 0px`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:#${props=>props.bg};
display:flex;
align-items:center;
justify-content:center;
color:white;
margin:0px 10px
`;
const Title = styled.h3`
margin-bottom:30px;
font-size:25px`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap`;
const ListItem = styled.li`
width:50%;
font-weight:300;
margin-bottom:10px`;
const ContactItem = styled.div`
margin-bottom:10px`;
const Payment = styled.img`
width:250px`;



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ABHI.</Logo>
            <Description>ABHI., India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the ABHI. shopping app has managed to keep up without any hiccups. In addition, ABHI. has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The ABHI. Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the ABHI. app. Visit ABHI. today and experience shopping like never before!</Description>
            <SocialMediaIcons>
                <SocialIcon bg="3B5999"><Facebook/></SocialIcon>
                <SocialIcon bg="E44E5F"><Instagram/></SocialIcon>
                <SocialIcon bg="55ACEE"><Twitter/></SocialIcon>
                <SocialIcon bg="E60023"><Pinterest/></SocialIcon>
            </SocialMediaIcons>
        </Left>
        <Center>
          <Title>Quick Links</Title>
          <List>
            <ListItem>HOME</ListItem>
            <ListItem>CART</ListItem>
            <ListItem>MAN FASHION</ListItem>
            <ListItem>WOMAN FASHION</ListItem>
            <ListItem>ACCESSORIES</ListItem>
            <ListItem>MY ACCOUNT</ListItem>
            <ListItem>TRACK ORDER</ListItem>
            <ListItem>WISHLIST</ListItem>
            <ListItem>TERMS AND CONDITIONS</ListItem>
          </List>
        </Center>
        <Right>
          <Title>CONTACT US</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/> Cyber City, 10th Floor, Tower B & C, DLF Building No.5 (Epitome, DLF Phase III, Gurugram, Haryana 122002</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/> +91 830-5226-574</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/>info@abhistore.com</ContactItem>
          <Payment src='https://payg.in/assets/img/upi-payments.png'/>
        </Right>
    </Container>
  )
}

export default Footer