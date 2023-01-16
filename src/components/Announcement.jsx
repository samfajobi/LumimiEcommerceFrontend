import React from 'react'
import styled from 'styled-components';




const Container = styled.div`
  height: 35px;
  max-width: 100vw;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;


  @media  screen and (max-width: 414px) {
   
    font-size: 13px;
   
   
    
   
  }
`


const Announcement = () => {
  return (
      <Container>
          Shop Now!!! Hot deal sales available, come sew less and buy at an affordable prices!!!!!!
      </Container>
    
    
  )
}

export default Announcement