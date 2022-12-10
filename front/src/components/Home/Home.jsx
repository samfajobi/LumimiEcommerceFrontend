import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Announcements/Announcement'
import Slider from '../Slider/Slider'
import ItemCategories from '../ItemCategories/ItemCategories'
import Products from '../Products/Products'
import InfoSection from '../InfoSection/InfoSection'
import Footer from '../Footer/Footer'





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