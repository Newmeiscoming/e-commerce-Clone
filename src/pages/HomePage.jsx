import { Slider } from '../components/Slider'
import React from 'react'
import { Announcement } from '../components/Announcement'
import { Navbar } from '../components/Navbar'
import Categories from '../components/Categories'
import ProductDisplay from '../components/ProductDisplay'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Slider/>
        <Categories/>
        <ProductDisplay/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
