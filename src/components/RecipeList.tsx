import getRecipeResponse from "../services/getRecipeResponse";
import RecipeSearchForm from "./RecipeSearchForm";
import { useState, useEffect } from "react";
import { RecipeSearchResponseInterface } from "../models/RecipeSearchResponseInterface";
import RecipeHit from "./RecipeHit";
import SearchParams from "../models/SearchParams";
import loadMoreRecipes from "../services/loadMoreRecipes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import FavoritesList from "./FavoritesList";
import FavoritesProvider from "../context/FavoritesProvider";
import "./RecipeList.css";
import "../App.css";

export default function RecipeList() {
  const [recipeSearchResponse, setRecipeSearchResponse] =
    useState<RecipeSearchResponseInterface>();

  function onSubmit(searchParams: SearchParams): void {
    getRecipeResponse(searchParams).then((data) => {
      setRecipeSearchResponse(data);
      localStorage.setItem("recipeSearchResponse", JSON.stringify(data));
    });
  }
  return (
    <div>
      <Router>
        <div className="header">
          <NavLink className="home" to="/" exact>
            Home
          </NavLink>
          <NavLink className="favorites" to="/recipe/favorites" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </NavLink>
          <div className="titleDiv">
            <h1 className="title">Recipes</h1>
          </div>
        </div>
        {/* <button
        onClick={() => {
          getRecipeResponse();
        }}
      >
        Get axios response
      </button> */}

        <Switch>
          <FavoritesProvider>
            <Route path="/recipe/favorites" exact>
              <FavoritesList />
            </Route>
            <Route path="/:recipeId" exact>
              <RecipeDetails />
            </Route>
            <Route path="/" exact>
              <RecipeSearchForm onSubmit={onSubmit} />

              {recipeSearchResponse?.hits?.map((hit, index) => (
                <RecipeHit
                  recipe={hit.recipe}
                  _links={hit._links}
                  key={index}
                />
              ))}

              {recipeSearchResponse && (
                <button
                  className="loadMoreButton"
                  onClick={() => {
                    loadMoreRecipes(recipeSearchResponse._links.next.href).then(
                      (data) => {
                        //copy then modify
                        let moreRecipes = { ...recipeSearchResponse };
                        //get the Next link and overwrite it
                        moreRecipes._links.next.href = data._links.next.href;
                        data.hits?.forEach((hit) =>
                          moreRecipes.hits?.push(hit)
                        );
                        setRecipeSearchResponse(moreRecipes);
                      }
                    );
                  }}
                >
                  Load More
                </button>
              )}
            </Route>
          </FavoritesProvider>
        </Switch>
      </Router>
    </div>
  );
}

//search button to search for everything even without typing specific things
//add favorites from homepage
//home button to refresh the page
//is there a way to have the results from previous search clear out when refreshing the page but still save the favorites page?
//write 6 tests
