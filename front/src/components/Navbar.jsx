import React from 'react'
import SearchIcon  from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import CustomizedMenus from "./UserDropDown"

  import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  RightDiv,
  SearchContainer,
  Input,
  Search,
  Logo,
  MenuItems,
  } from "./NavbarStyle"


const Navbar = () => {
  const quantity  = useSelector((state) => state.cart.quantity )
  // console.log(quantity )

  return (
    <Container>
        <Wrapper>
            <Left>
                <Search>Search</Search>
                <SearchContainer>
                  <Input/>
                  <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>
              <Logo>LUMIMI</Logo>
            </Center>
            <Right>
              <RightDiv>
                <CustomizedMenus />
              </RightDiv>   
              <Link to="/signup">
                <MenuItems>REGISTER</MenuItems>
              </Link>
              <Link to="/">
                <MenuItems>LOGIN</MenuItems>
              </Link>
              <MenuItems>
              <Link to="/cart">
                <Badge badgeContent={quantity} color="primary">  
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
              </MenuItems>  
            </Right>
        </Wrapper>
    </Container>
    
  )
}

export default Navbar