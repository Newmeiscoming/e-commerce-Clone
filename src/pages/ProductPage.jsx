import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Newsletter from '../components/Newsletter';

import ProductDisplay from '../components/ProductDisplay';
const Container = styled.div``;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;`;
const Title = styled.h1`margin:20px`;
const Filter = styled.div`margin:20px`;
const FilterText = styled.span`font-size:20px;
margin-right:20px;
font-weight:600`;
const Select = styled.select`
padding:10px;
margin-right:20px`;
const Option = styled.option`
`;
const ProductPage = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>STYLES</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>COLOR</Option>
                    <Option >WHITE</Option>
                    <Option >BLACK</Option>
                    <Option >RED</Option>
                    <Option >BLUE</Option>
                    <Option >YELLOW</Option>
                    <Option >GREEN</Option>
                </Select> 
                <Select>
                    <Option  disabled selected>SIZE</Option>
                    <Option >XS</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                </Select>  
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select>
                    <Option  selected>NEWEST</Option>
                    <Option >PRICE (LOW TO HIGH)</Option>
                    <Option >PRICE (HIGH TO LOW)</Option>
                    
                </Select>  
            </Filter>
        </FilterContainer>
        <ProductDisplay/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductPage