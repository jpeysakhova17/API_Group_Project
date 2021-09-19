import axios from "axios";
import {
  Recipe,
  RecipeSearchResponseInterface,
} from "../models/RecipeSearchResponseInterface";

export default function getRecipeResponse(): Promise<RecipeSearchResponseInterface> {
  return axios
    .get("https://api.edamam.com/api/recipes/v2", {
      params: {
        type: "public",
        q: "chicken",
        app_id: process.env.REACT_APP_APP_ID,
        app_key: process.env.REACT_APP_APP_KEY,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=4643c294&app_key=9fbafa480e2cf82ad18286211eec0d48
