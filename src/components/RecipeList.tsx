import getRecipeResponse from "../services/getRecipeResponse";
import RecipeSearchForm from "./RecipeSearchForm";
import { useState } from "react";
import { RecipeSearchResponseInterface } from "../models/RecipeSearchResponseInterface";
import RecipeHit from "./RecipeHit";
import SearchParams from "../models/SearchParams";

export default function RecipeList() {
  const [recipeSearchResponse, setRecipeSearchResponse] =
    useState<RecipeSearchResponseInterface>();

  function onSubmit(searchParams: SearchParams): void {
    getRecipeResponse(searchParams).then((data) =>
      setRecipeSearchResponse(data)
    );
  }
  return (
    <div>
      <h1>Recipe List</h1>
      {/* <button
        onClick={() => {
          getRecipeResponse();
        }}
      >
        Get axios response
      </button> */}

      <RecipeSearchForm onSubmit={onSubmit} />
      {recipeSearchResponse?.hits?.map((hit, index) => (
        <RecipeHit recipe={hit.recipe} _links={hit._links} key={index} />
      ))}
    </div>
  );
}
