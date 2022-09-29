import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
border:none;
width:40%;
padding:15px 20px;
background-color:teal;
color:white;
font-size:15px`;
const Container  = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.1)),url("https://t3.ftcdn.net/jpg/03/33/81/02/360_F_333810258_5gP2SBYroH0jtgAtI2ANibRRDe2YY7dU.jpg") center;
background-repeat: no-repeat;
background-size: 100vw 100vh;
display:flex;
align-items:center;
justify-content:center;`;
const Wrapper  = styled.div`
width:35%;
padding:20px;`;
const Title  = styled.h1`
font-size:40px;
font-weight:300;
color:white
`;
const Form  = styled.form`
display:flex;
flex-wrap:wrap;
flex-direction:column;`;
const Input = styled.input`
flex:1;
min-width:35%;
margin:20px 10px 0px 0px;
padding:10px;
font-size:22px;
outline:none`;
const Agreement = styled.span`
font-size:12px;
margin:20px 0px`;

const LoginPage = () => {
  return (
    <Container>
       <Wrapper>
        <Title>SIGN-INx</Title>
        <Form>
          <Input placeholder='Username'/>
          <Input placeholder='Password'/>
         
          <Agreement>By continuing, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b></Agreement>
          
        </Form>
        <Button>CONTINUE</Button>
      </Wrapper>
    </Container>
  )
}

export default LoginPage