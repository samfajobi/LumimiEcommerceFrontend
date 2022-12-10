import styled from 'styled-components';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;  
  position: relative;
  background-color: lightgray;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${ props => props.direction === 'left' && '10px'}; 
  right: ${ props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const ImgContainer = styled.div`
  flex: 1
`
const Image = styled.img`
  height: 450px;

 `  

const InfoContainer = styled.div`
  flex: 1
  
 
`
const InfoTitle = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 500;

`
const Desc = styled.p`
  text-transform: uppercase;
  margin: 25px 0px;
`
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  text-transform: uppercase;
`


const Slider = () => {
  return (
      <Container>
        
          <Arrow  direction='left'>
              <ArrowLeftIcon />
          </Arrow>
          <Wrapper>
            <Slide>
              <ImgContainer>
                <Image src='/images/fashImg2.png'/>
              </ImgContainer>
              <InfoContainer>
                <InfoTitle>Summer sales</InfoTitle>
                <Desc>Come and Shop now at a high rate discount</Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          </Wrapper>
          <Arrow  direction='right'>
              <ArrowRightIcon  />
          </Arrow>
        
      </Container>
   
  )
}

export default Slider