import styled from "styled-components";
import { useState } from "react"
import axios from "axios";


const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba( 255, 255, 255, 0.6),
    rgba( 255, 255, 255,0.7  )

  ),
  url("https://img.freepik.com/free-photo/fashion-portrait-mix-race-woman-with-brown-skin-curly-african-hairstyle-vivid-pink-background-wearing-silver-winter-jacket-grey-hat_273443-123.jpg?w=2000") center ;
  display: flex;
  justify-content: center;
  align-items: center;
`

 const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background: white;

 `
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  margin: 10px;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
 
  
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px;
  
`

const Agreement = styled.div`
  margin: 10px;
`
const Button = styled.button`
  padding: 10px;
  background-color: blue;
  width: 30%;
  color: lightgray;
  margin: 10px;
  cursor: pointer;
`


const Register = () => {

  const [ name, setName] = useState("")
  const [ lastName, setLastName] = useState("")
  const [ userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ confirmPassword, setConfirmPassword] = useState("")


  const SubmitForm = () => {

    let formData = {
      name: name,
      lastname: lastName,
      username: userName,
      email: email,
      pass: password,
      confirmpass: confirmPassword
    }

    axios.post("/register", formData).
    then( (res) => {
      console.log(`Form has been Submitted!!! ${res}`)
    }).catch ( (err) => {
      console.log(`Error!!! ${err}`)
    })
  }


 const handleNameEvent = (event) => {
   setName(event.target.value)
 }


  return (
   <Container>
     <Wrapper>
       <Title>CREATE AN ACCOUNT</Title>
       <Form>
         <Input placeholder='name' onChange={handleNameEvent} />
         <Input placeholder='lastname' onChange={ (event) => setLastName(event.target.value)} />
         <Input placeholder='username' onChange={ (event) => setUserName(event.target.value)}/>
         <Input placeholder='email' onChange={ (event) => setEmail(event.target.value)}/>
         <Input placeholder='password' onChange={ (event) => setPassword(event.target.value)}/>
         <Input placeholder='confirm password' onChange={ (event) => setConfirmPassword(event.target.value)}/>
         <Agreement> I really do agree to create an account in accordance to <b>Policy</b> </Agreement>
       </Form>
       <Button>CREATE</Button>
     </Wrapper>
   </Container>
  )
}

export default Register