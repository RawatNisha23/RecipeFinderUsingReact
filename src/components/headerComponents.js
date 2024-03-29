import styled from "styled-components";

const Header = styled.div`
  color: white;
  background-color: #222831;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 4px 7px 0 #555;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 5px;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  width: 50%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;


const BackgroundDiv = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  min-height: auto; 
  box-shadow: none;
  /* overflow: auto;  */

  &::before {
    box-shadow: none;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('img-photo5.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px; 
`;


export default {
  Header,
  AppNameComponent,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
  Container,
  BackgroundDiv,
  ContentWrapper,
};
