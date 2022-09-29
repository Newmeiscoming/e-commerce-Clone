import React from 'react'
import styled from 'styled-components'
import {categories} from "../data";
import CategoriesDisplay from './CategoriesDisplay';
const Container = styled.div`
display:flex;
padding:20px;
height:800px;
background-color:white`;
const Categories = () => {
  return (
    <Container>
    {categories.map(data=>{
      return (
        <CategoriesDisplay data = {data}/>
      ) 
      
    })}
    </Container>
    
  )
}

export default Categories