import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';


const Container = styled.div`
  width: 100vw;
  background-color: lightgray;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  

`
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;

`
const SubTitle = styled.p` 
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 450;

 

`

const InputContainer = styled.div`
  display: flex;


  @media screen and (max-width: 600px) {
    width: 70%;
  }

`

const Input = styled.input`
  padding: 12px 20px;
  width: 500px;
  font-size: 16px;

`
const Button = styled.button`
  background-color: #AB33FF;
  cursor: pointer;
  border: none;
`

const Icon = styled.div`
  width: 70px

`
   

const InfoSecton = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <SubTitle>Type in your email here to receive updates</SubTitle>
          <InputContainer>
            <Input type='text' placeholder='Type your email'/>
            <Button>
                <Icon><SendIcon /></Icon>
            </Button>
          </InputContainer>
          
      </Container>
    
  )
}    

export default InfoSecton;      