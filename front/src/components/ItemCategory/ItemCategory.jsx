import styled from "styled-components"
import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 8px;
  position: relative;
`
const Img = styled.img`
  width: 100%;
  object-fit: contain;

`

const CatInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

const CatTitle = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 100px;
`

const Button = styled.button`
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  color: gray;



  &:hover {
    background-color: lightgray;
  }
`


const ItemCategory = ({item}) => {
  return (
    
    <Container>
      <Link to= {`products/${item.cat}`}>
        <Img src={item.img}/>
        <CatInfo>
          <CatTitle>{item.title}</CatTitle>
          <Button>SHOP NOW</Button>
        </CatInfo>
      </Link>
     
    </Container>
  )
}

export default ItemCategory