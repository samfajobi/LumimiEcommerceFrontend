import styled from 'styled-components'
import ItemCategory from "./ItemCategory"
import { CategoryData } from '../data.js'



const Container = styled.div`
  display: flex;
  padding: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    background: lightgray;
  }

`
const ItemCategories = () => {
  
  return (
      <Container>
        {CategoryData.map( (item) => (
          <ItemCategory key={item.id}  item={item}/>
        ))}

      </Container>
   
  )
}

export default ItemCategories