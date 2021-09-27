import axios from "axios";
import {
  Recipe,
  RecipeSearchResponseInterface,
} from "../models/RecipeSearchResponseInterface";
import SearchParams from "../models/SearchParams";

export default function loadMoreRecipes(
  url: string
): Promise<RecipeSearchResponseInterface> {
  return axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
}
