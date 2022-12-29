import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

const Info = styled.div`
  opacity: 0;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;    
  transition: all 1.1s ease;
  cursor: pointer;

` 

const Container = styled.div`
  flex: 1 ;
  min-width: 320px;
  height: 350px;
  margin: 5px;
  display: flex;
  justify-content: center; 
  align-items: center;
  background-color: lightgray;
  position: relative;
 

  &:hover ${Info} {
    opacity: 1;
  }
 
`

const Image = styled.img`
  height: 70%;
  z-index: 2;
  
`

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Icon = styled.div`
  padding: 5px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  
 
  &:hover {
    background-color: #33EDFF;
    transform: scale(1.1);
    
  }
 

`


const Product = ( {product} ) => {
  return (
    <Container>
        <Image src={product.img} />
        <Circle></Circle>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Link to={`/product/${product._id}`}>
              <Icon><SearchIcon /></Icon>
            </Link>
            
            <Icon><ShoppingCartOutlinedIcon /></Icon>
        </Info>
    </Container>
  )
}

export default Product