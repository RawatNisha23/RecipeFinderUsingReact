import styled, { keyframes } from "styled-components";

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 15px;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
  background-color: #FFEBD8;
  border-radius: 10px;
`;

const CoverImg = styled.img`
  height: 200px;
  object-fit:cover;
`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

const IngredientText = styled.span`
  font-size: 18px;
  border: solid 1px #FFC5C5;
  color: black;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  background-color: #A6FF96; 

  &:hover {
    background-color: #EED3D9; 
    border: solid 1px #C5E898;
    color: Black;
  }
`;

const SeeMoreText = styled(IngredientText)`
  color: #eb3300;
  border: solid 1px #9AD0C2;
  background-color: #FFB38E; 

  &:hover {
    background-color: #ACE2E1;
    border: solid 1px #FFB38E; 
    color: black; 
  }

`;

const fadeIn = keyframes`
 from {
    opacity: 0;
    transform: translateY(-20px);
 }
 to {
    opacity: 1;
    transform: translateY(0);
 }
`;

const Placeholder = styled.div`
 height: 120px;
 margin: 100px;
 padding: 30px;
  width: 100%;
 text-align: center; 
 color: white;
`;

const Para = styled.p`
  font-size:40px; 
  font-weight: bold;
  color: ${props => props.color};
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default {
  RecipeListContainer,
  RecipeContainer,
  CoverImg,
  RecipeName,
  IngredientText,
  SeeMoreText,
  Placeholder,
  Para,
  StyledTable,
  TableHead,
  TableCell,
  TableRow,

};
