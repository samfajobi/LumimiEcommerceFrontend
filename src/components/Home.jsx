import React from 'react'
import Navbar from './Navbar'
import Announcement from './Announcement'
import Slider from './Slider'
import ItemCategories from './ItemCategories'
import Products from './Products'
import InfoSection from './InfoSection'
import Footer from './Footer'





const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <ItemCategories />
      <Products />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default Home