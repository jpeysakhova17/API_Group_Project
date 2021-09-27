import axios from "axios";
import RecipeDetailsInterface from "../models/RecipeDetailsInterface";

export default function getDetails(
  recipeId: string
): Promise<RecipeDetailsInterface> {
  return axios
    .get(`http://api.edamam.com/api/recipes/v2/%23${recipeId}`, {
      params: {
        type: "public",
        app_id: process.env.REACT_APP_APP_ID,
        app_key: process.env.REACT_APP_APP_KEY,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
