import React from 'react'
import styled from 'styled-components'
const Container  = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.1)),url("https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white-full-lenght_273443-4935.jpg?w=2000");
display:flex;
align-items:center;
justify-content:center;`;
const Wrapper  = styled.div`
width:35%;
padding:20px;`;
const Title  = styled.h1`
font-size:40px;
font-weight:300;`;
const Form  = styled.form`
display:flex;
flex-wrap:wrap;`;
const Input = styled.input`
flex:1;
min-width:35%;
margin:20px 10px 0px 0px;
padding:10px`;
const Agreement = styled.span`
font-size:12px;
margin:20px 0px`;
const Button = styled.button`
border:none;
width:40%;
padding:15px 20px;
background-color:teal;
color:white;
font-size:15px`;
const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='First Name'/>
          <Input placeholder='Last Name'/>
          <Input placeholder='UserName'/>
          <Input placeholder='email'/>
          <Input placeholder='Create Passdword'/>
          <Input placeholder='Confirm Passdword'/>
          <Agreement>By continuing, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b></Agreement>
          
        </Form>
        <Button>CONTINUE</Button>
      </Wrapper>
    </Container>
  )
}

export default RegisterPage