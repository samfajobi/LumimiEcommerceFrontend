import styled from "styled-components"
import { useLocation } from 'react-router'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import InfoSection from "../components/InfoSection"
import Footer from "../components/Footer"
import Products from "../components/Products"


const Container = styled.div`

`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

`
const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterText = styled.div`
  font-size: 19px;
  font-weight: 500;
`

const Select = styled.select`
  padding: 10px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500; 
`

const Option = styled.option`
  

`

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [ filters, setFilter ] = useState({});
  const [ sort, setSort ] =  useState("newest");

  const handleFilter = (event) => {
    const value = event.target.value;
    
    setFilter({
      ...filters,
      [event.target.name]: value})
  };


  return (
    
      <Container>
          <Navbar />
          <Announcement />
          <Title>{cat}</Title>
          <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
              <Select name="color" onChange={handleFilter}>
                <Option disabled >color</Option>
                <Option>blue</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>yellow</Option>
                <Option>purple</Option>
                <Option>gray</Option>
              </Select>
              <Select name="size" onChange={handleFilter}>
                <Option   disabled >size</Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>XS</Option>
                <Option>S</Option>
              </Select>

            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
              <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="newest" >Newest</Option>
                <Option value="asc" >Price (cheap)</Option>
                <Option value="desc" >Price (cost)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products cat={cat} sort={sort} filters={filters} />
          <InfoSection />
          <Footer />
      </Container>
   
  )
}


export default ProductsPage 