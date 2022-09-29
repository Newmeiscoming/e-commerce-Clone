import React from 'react'
import styled from 'styled-components'
import { ProductItems } from '../data'
import Product from './Product';
const Container = styled.div`
margin-left:150px;
width:80vw;
display:flex;
justify-content:space-between;
padding:20px;
flex-wrap:wrap;
margin-top:100px`;
const ProductDisplay = () => {
  return (
   <Container>
    {ProductItems.map(data=>{
        return <Product data={data}/>
    })}
   </Container> 
    
  )
}

export default ProductDisplay;