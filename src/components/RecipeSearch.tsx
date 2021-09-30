import React from "react";
import RecipeSearchForm from "./RecipeSearchForm";
import { RecipeSearchResponseInterface } from "../models/RecipeSearchResponseInterface";
import RecipeHit from "./RecipeHit";
import RecipeDetailsInterface from "../models/RecipeDetailsInterface";
import { Link } from "react-router-dom";
import { useContext } from "react";
import loadMoreRecipes from "../services/loadMoreRecipes";
import SearchParams from "../models/SearchParams";
import RecipeDetails from "../models/RecipeDetailsInterface";

export default function RecipeSearch() {
  return (
    <div>
      <h1>Recipe Search</h1>
      {/* <RecipeSearchForm onSubmit={onSubmit} />

      {recipeSearchResponse?.hits?.map((hit, index) => (
        <RecipeHit recipe={hit.recipe} _links={hit._links} key={index} />
      ))}
      {recipeSearchResponse && (
        <button
          onClick={() => {
            loadMoreRecipes(recipeSearchResponse._links.next.href).then(
              (data) => {
                //copy then modify
                let moreRecipes = { ...recipeSearchResponse };
                //get the Next link and overwrite it
                moreRecipes._links.next.href = data._links.next.href;
                data.hits?.forEach((hit) => moreRecipes.hits?.push(hit));
                setRecipeSearchResponse(moreRecipes);
              }
            );
          }}
        >
          Load More
        </button>
      )} */}
    </div>
  );
}
