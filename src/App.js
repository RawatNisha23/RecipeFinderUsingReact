//------------------------ imports -------------------------------
import React, { useState } from "react";
import Axios from "axios";
import styled, { keyframes } from "styled-components";
import Header from "./components/headerComponents";
import Recipe from "./components/recipeComponents";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

//---------------------- api keys ----------------------------
const APP_ID = "a6d87745";
const APP_KEY = "3820d9ee89ddb273166e7fe62f921f4c";

//------------------------- chnage text color -----------------
function useColorChange(initialColor, applyColorChange) {
  const [color, setColor] = React.useState(initialColor);

  React.useEffect(() => {
    if (applyColorChange) {
      const interval = setInterval(() => {
        const r = Math.floor(Math.random() * 128) + 128;
        const g = Math.floor(Math.random() * 128) + 128;
        const b = Math.floor(Math.random() * 128) + 128;
        setColor(`rgb(${r}, ${g}, ${b})`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [applyColorChange]);

  return color;
}

//--------------------- main app ---------------------------------
function App() {
  //------------ variable declaration --------------
  const [searchInput, setSearchInput] = React.useState("");
  const color = useColorChange("red", searchInput === "");
  const [timeoutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  //------------- input change event --------------
  const OnTextChange = (event) => {
    setSearchInput(event.target.value);
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 400);
    updateTimeOutId(timeout);
  };

  //-------------- fetch data -------------------
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  //---------------------- recipe layout ---------------
  const RecipeComponent = (props) => {
    const [show, setShow] = useState(false);
    const { recipeobj } = props;
    console.log(props);
    return (
      <>
        {/* ------------ ingredients ------------- */}
        <Dialog open={show}>
          <DialogTitle
            id="alert-dialog-slide-title"
            style={{ fontWeight: "bold" }}
          >
            Ingredients
          </DialogTitle>
          <DialogContent>
            <Recipe.StyledTable>
              <thead>
                <tr>
                  <Recipe.TableHead>Image</Recipe.TableHead>
                  <Recipe.TableHead>Ingredients</Recipe.TableHead>
                  <Recipe.TableHead>Weight</Recipe.TableHead>
                </tr>
              </thead>
              <tbody>
                {recipeobj.ingredients.map((ingredientsObj, index) => (
                  <Recipe.TableRow key={index}>
                    <Recipe.TableCell>
                      <img
                        src={ingredientsObj.image}
                        width="50"
                        height="50"
                        alt="Description of the image"
                      />
                    </Recipe.TableCell>
                    <Recipe.TableCell>{ingredientsObj.text}</Recipe.TableCell>
                    <Recipe.TableCell>{ingredientsObj.weight}</Recipe.TableCell>
                  </Recipe.TableRow>
                ))}
              </tbody>
            </Recipe.StyledTable>
          </DialogContent>
          <DialogActions>
            {/* ---------------- button ---------------- */}
            <Recipe.IngredientText onClick={() => window.open(recipeobj.url)}>
              See More
            </Recipe.IngredientText>
            <Recipe.SeeMoreText onClick={() => setShow(false)}>
              Close
            </Recipe.SeeMoreText>
          </DialogActions>
        </Dialog>
        {/* -------------- recipe data ---------------- */}
        <Recipe.RecipeContainer>
          <Recipe.CoverImg src={recipeobj.image} />
          <Recipe.RecipeName>{recipeobj.label}</Recipe.RecipeName>
          <Recipe.IngredientText onClick={() => setShow(true)}>
            Ingredients
          </Recipe.IngredientText>
          <Recipe.SeeMoreText onClick={() => window.open(recipeobj.url)}>
            See Complete Recipe
          </Recipe.SeeMoreText>
        </Recipe.RecipeContainer>
      </>
    );
  };

  //----------------------------- main return ----------------------------
  return (
    <Header.Container>
      {/* ------------- header ----------------- */}
      <Header.Header>
        <Header.AppNameComponent>
          <Header.AppIcon src="homelogo.svg" alt="Home Logo" />
          Recipe Finder
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="search-icon.svg" alt="Search Icon" />
          <Header.SearchInput
            placeholder="Search Recipe"
            onChange={OnTextChange}
          />
        </Header.SearchComponent>
      </Header.Header>
      {/* --------------------- body --------------------------- */}
      <Header.BackgroundDiv>
        <Header.ContentWrapper>
          <Recipe.RecipeListContainer>
            {recipeList.length ? (
              recipeList.map((recipeobj) => (
                <RecipeComponent recipeobj={recipeobj.recipe} />
              ))
            ) : (
              <Recipe.Placeholder>
                <Recipe.Para color={color}>
                  Welcome to Food Recipe Finder App !! Please search the recipe
                  with ingredients
                </Recipe.Para>
              </Recipe.Placeholder>
            )}
          </Recipe.RecipeListContainer>
        </Header.ContentWrapper>
      </Header.BackgroundDiv>
    </Header.Container>
  );
}

export default App;
