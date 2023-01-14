// import { useState, useEffect } from 'react';
// import axios from "axios"
import styled from "styled-components"
import Navbar from "./Navbar"
import Announcement from "./Announcement"
import InfoSection from "./InfoSection"
import Footer from "./Footer"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
// import { deleteProducts } from "../../container/redux/cartReduxSlice";
import { useSelector, useDispatch } from "react-redux";
import  { Link } from "react-router-dom"
// import { useLocation } from 'react-router-dom';





const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 350;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`
const TopButton = styled.button`
  display: flex;
  padding: 15px;
  font-weight: 600;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};

` 



const TopTexts = styled.div`
 
`
const TopText = styled.span`
  
  padding: 0px 10px;
  cursor: pointer;
  font-size: 20px;

`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 300px;
`
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  
  
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color}
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 

`

const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center; 
  
`
const ProductAmount = styled.div`
  padding: 0px 8px;
  font-size: 25px;
`
const PriceAmount = styled.div`
  font-size: 30px;
  font-weight: 300;
 
`
const DeleteCartIcon = styled.div`
 
`

const Hr = styled.hr`
  margin: 5px 0px;
  height: 1px;
  background-color: #eee;
  border: none;
`

const Summary = styled.div` 
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 340px;

`

const SummaryTitle = styled.h1`
  display: flex;
  justify-content: center;
`
const SummaryItems = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '600'};
  font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`
  
`
const SummaryItemAmount= styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;

  &:hover {
   
    background-color: gray;
  }
`




const Cart = () => {
  /* const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [quantity, setQuantity] = useState([]) */
  /* const [product, setProduct] = useState([]); */
  const CartTotal = useSelector((state) => state.cart.total )
  const cartProducts = useSelector((state) => state.cart.products )


/*   
  const handleQuantity  = (type) => {
    if( type === "inc") {
      setQuantity( quantity + 1)
    } else {
       quantity > 1 && setQuantity (quantity - 1)
    }
  }; */


/* 
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
  }, [id]) */

  
  /* const handleDeleteClick = () => {
    dispatch(deleteProducts({ Id: product?._id}))
  }; */
/* 
  const handleClick = () => {
    dispatch(addProducts({...product, quantity}))
  }; */



  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top> 
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Carts(3)</TopText>
              <TopText>Your Wishlists(1)</TopText>
            </TopTexts>
            
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cartProducts?.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product?.img}/>
                  <Details>  
                    <ProductName><b>Product:</b> {product?.title}</ProductName>
                    <ProductId><b>ID:</b> {product?._id} </ProductId>
                    <ProductColor color ={product?.color}/>
                    <ProductSize><b>Size:</b> {product?.size}</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                      <RemoveIcon/>
                       <ProductAmount>{product?.quantity}</ProductAmount>
                      <AddIcon/>
                  </ProductAmountContainer>
                  <PriceAmount>
                   {product?.price * product?.quantity}
                  </PriceAmount>
                  <DeleteCartIcon>
                    <DeleteIcon /> Remove
                  </DeleteCartIcon>
                </PriceDetails>
              </Product>
              ))}
              <Hr/>
              
            </Info>
            <Summary>
              <SummaryTitle>ORDER NOW</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemAmount>{CartTotal}</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems>
                <SummaryItemText>Shipping Fee</SummaryItemText>
                <SummaryItemAmount>$ 10</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems>
                <SummaryItemText>Shipping discount</SummaryItemText>
                <SummaryItemAmount>$ 8</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems type='total'>
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemAmount>{CartTotal}</SummaryItemAmount>
              </SummaryItems> 
              <Link to="/payment">
                <Button>CHECKOUT NOW</Button>
              </Link>
            </Summary>
          </Bottom>
        </Wrapper>
        <InfoSection />
        <Footer />
    </Container>
  )
}

export default Cart