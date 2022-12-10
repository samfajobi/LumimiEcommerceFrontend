import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcements/Announcement";
import InfoSection from "../InfoSection/InfoSection";
import Footer from "../Footer/Footer";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import { useLocation } from "react-router";
import { useState, useEffect } from 'react'
import { addProducts } from "../../container/redux/cartReduxSlice";
import { useDispatch } from "react-redux";






const Container = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`
const ImgContainer = styled.div`
  background-color: lightgray;
  flex: 1;
  width: 40%;
 
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 30px;
`
const InfoTitle = styled.h1`
  font-weight: 250;
`
const InfoDesc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-size: 40px;
  font-weight: 200;
  
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 30px;
`
const Filter = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 2  00;
`
const FilterTitle = styled.div`
  
`
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  margin-left: 10px;
  
`
const FilterSizeOption = styled.option`

  
` 
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px;
`   



const ChangeProdctNoContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid #781EEA;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 7px;
  
`
const Button = styled.button`
  border: 3px solid #DE1EEA;
  padding: 15px;
  font-size: 15px;
  font-weight: 200;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
      background-color: #B4BBFB
  }
 
`




const ProductPage = () => {

  

  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [ product, setProduct] = useState([])
  const [ quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleQuantity  = (type) => {
    if( type === "dec") {
      setQuantity( quantity + 1)
    } else {
       quantity > 1 && setQuantity (quantity - 1 )
    }
  }



  useEffect( () => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/" + id)
        setProduct(response.data)

      } catch(err) {
        console.log(err) 
      }
    }
    fetchProduct()
  }, [id])
    
  
  const handleClick = () => {
    dispatch(addProducts({...product, quantity}))

  }


  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                <Image src={product.img}/>
              </ImgContainer>
              <InfoContainer>
                  <InfoTitle>{product.title}</InfoTitle>
                  <InfoDesc>
                  {product.des} 
                  </InfoDesc>
                  <Price>${product.price}</Price>
                  <FilterContainer>
                    <Filter>
                      <FilterTitle>Color:</FilterTitle>
                      <FilterColor>{product.color}</FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                          <FilterSizeOption>{product.size}</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                  </FilterContainer>
                  <ChangeProdctNoContainer>
                    <AmountContainer>
                        <RemoveIcon onClick={() => handleQuantity("inc") }/>
                        <Amount>{quantity}</Amount>
                        <AddIcon  onClick={() => handleQuantity("dec")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                  </ChangeProdctNoContainer>
              </InfoContainer>
          </Wrapper> 
          <InfoSection />
          <Footer />
      </Container>
   
  )
}

export default ProductPage