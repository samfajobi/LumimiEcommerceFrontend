import React from 'react'
import SearchIcon  from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

  import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  SearchContainer,
  Input,
  Search,
  Logo,
  MenuItems,
  } from "./NavbarStyle"



// const Container = styled.div`
//   height: 60px;
//   width: 100vw;    

// `

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   background-color: lighgray;
  
// `
// const Left = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
// `
// const Center = styled.div`
//   flex: 1;

//   @media screen and (max-width: 600px) {
//     flex: 1;
//     display: flex;
//     justify-content: flex-start;

//   }
// `

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;

//   @media screen and (max-width: 600px) {
//     flex: 1;
//   }

// `

// const SearchContainer = styled.div`
//   border: 1px solid lightgray;
//   padding: 6px;
//   margin: 6px;

//   @media screen and (max-width: 600px) {
//     display: flex;
//     border: 1px solid lightgray;
//     padding: 3px;
//   }

// `

// const Input = styled.input`
//   border: none;
//   width: 60px;
//   margin-right: 5px;
 
// `
// const Search = styled.div`
//   font-weight: bold;
//   font-size: 18px;

//   @media screen and (max-width: 600px) {
//     display: none;

//   }
// `




// const Logo = styled.h1`
//   font-weight: bold;
//   text-align: center;
  
// `
// const MenuItem = styled.div`
//   cursor: pointer;
//   padding-left: 10px;
//   font-size: 17px;

// `



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
              <div>
                <PersonOutlineIcon />
                Account
              </div>  
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