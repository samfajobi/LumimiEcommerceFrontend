import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Container = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
 
`

const LogoPart = styled.div`
  flex: 1;
 
`
const Logo = styled.h1``
const Desc = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 16px;
  text-align: justify;
`
const LogoIcons = styled.div` 
  display: flex;

  
`
const LgIcon1 = styled.div`
  background-color: #072D97;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`
const LgIcon2 = styled.div`
    background-color: #10BD05;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`
const LgIcon3 = styled.div`
    background-color: #EA1ECF;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`
const LgIcon4 = styled.div`
    background-color: #EA391E;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const WebLinks = styled.div`
  flex: 1;
 
 

  @media screen and (max-width: 600px) {
    display: none;
  }
 
  
`


const LnkTitle = styled.h3`
  margin-left: 38px;

  @media screen and (max-width: 600px) {
    display: none;
  }

  
`
const Links = styled.div`
  display: flex;
  margin-top: 34px;
  margin-left: 40px;

  @media screen and (max-width: 600px) {
    display: none;
  }
  
`

const Ul1 = styled.div`
  
`


const Ul2 = styled.div`
  margin-left: 24%;
`



const Li = styled.li`
  list-style: none;
  margin-top: 5px;
  margin-bottom: 15px;
`

const Contact = styled.div` 
  flex: 1;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
    background: lightgray;
   

  }
`

const ContTitle = styled.h3`
  
`
const AllAddress = styled.div`
  margin-top: 35px;
`
const Address1 = styled.div`
  display: flex;
  margin-top: 10px;
`
const Address2 = styled.div`
  display: flex;
  margin-top: 15px;

`
const Address3 = styled.div`
  display: flex;
  margin-top: 15px;

`
const Address = styled.div`
 
`
const AddrsIcon1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`
const AddrsIcon2 = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: lightgray;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`
const AddrsIcon3 = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: lightgray;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`


const Footer = () => {
  return (
    <Container>
        <LogoPart>
            <Logo>LUMIMI.</Logo>
            <Desc>TK Query is built on top of the Redux Toolkit core for
                its implementation, using Redux internally for its architecture.
                Although knowledge of Redux and RTK are not required to use RTK Query,
                you should explore
                all of the additional global store management capabilities they provide,
            </Desc>
            <LogoIcons>
                <LgIcon1><FacebookIcon /></LgIcon1>
                <LgIcon2><TwitterIcon /></LgIcon2>
                <LgIcon3><InstagramIcon /></LgIcon3>
                <LgIcon4><PinterestIcon /></LgIcon4>
            </LogoIcons>   
        </LogoPart>

          <WebLinks>
           <LnkTitle>Useful Links</LnkTitle>
           <Links>
             <Ul1>
               <Li>Home</Li>
               <Li>Home</Li>
               <Li>Home</Li>
               <Li>Home</Li>
             </Ul1>
             <Ul2>
               <Li>Home</Li>
               <Li>Home</Li>
               <Li>Home</Li>
               <Li>Home</Li>
             </Ul2>
           </Links>
          </WebLinks>
          
        <Contact>
            <ContTitle>Contact</ContTitle>
            <AllAddress>
              <Address1>
                <AddrsIcon1><LocationOnIcon /></AddrsIcon1>
                <Address>23,off Akoka road, Yaba Lagos</Address>
              </Address1>
              <Address2>
                <AddrsIcon2><CallIcon /></AddrsIcon2>
                <Address>8153382359, 09045666888</Address>
              </Address2>
              <Address3>
                <AddrsIcon3><MailOutlineIcon /></AddrsIcon3>
                <Address>info@segfaj.email.com</Address>
              </Address3>
            </AllAddress>
       </Contact>

    </Container>
  )
}

export default Footer