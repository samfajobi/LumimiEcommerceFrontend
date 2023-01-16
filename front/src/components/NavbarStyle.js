import styled from 'styled-components'



const Container = styled.div`
  height: 60px;
  width: 100vw;    

`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: lighgray;
  
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const Center = styled.div`
  flex: 1;

  @media screen and (max-width: 600px) {
    flex: 1;
    display: flex;
    justify-content: flex-start;

  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex: 1;
  }

`
const RightDiv = styled.div`
 display: flex
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  padding: 6px;
  margin: 6px;

  @media screen and (max-width: 600px) {
    display: flex;
    border: 1px solid lightgray;
    padding: 3px;
  }

`

const Input = styled.input`
  border: none;
  width: 60px;
  margin-right: 5px;
 
`
const Search = styled.div`
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    display: none;

  }
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  
`
const MenuItems = styled.div`
  cursor: pointer;
  padding-left: 10px;
  font-size: 17px;
`


export {
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
    MenuItems
}
