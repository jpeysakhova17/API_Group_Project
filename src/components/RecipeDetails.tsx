import { useContext, useEffect, useState } from "react";
import RecipeDetailsInterface from "../models/RecipeDetailsInterface";
import { Favorites } from "../context/FavoritesProvider";
import getDetails from "../services/getDetails";
import FavoritesList from "./FavoritesList";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const [details, setDetails] = useState<RecipeDetailsInterface>();
  const id = document.location.pathname.slice(1);

  const fetchedDetails = useEffect(() => {
    getDetails(id).then((data) => setDetails(data));
  }, []);

  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  const thisRecipeIsAFavorite: boolean = favoritesList.some(
    (favorite) => favorite.recipe.uri == details?.recipe.uri
  );
  return (
    <div className="detailsPage">
      <h1>{details?.recipe.label}</h1>
      <img src={details?.recipe.image} />
      <p>
        source: <a href={details?.recipe.url}>{details?.recipe.source}</a>
      </p>
      {console.log("details are: ", details)}
      <p>Ingredients</p>
      <ul>
        {details?.recipe.ingredientLines?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {thisRecipeIsAFavorite ? (
        <button
          className="detailsPageRemoveButton"
          onClick={() => {
            removeFromFavorites(details?.recipe.uri!);
          }}
        >
          Remove Favorite
        </button>
      ) : (
        <button
          className="detailsPageFavoritesButton"
          onClick={() => {
            console.log(details);
            if (details) {
              addToFavorites(details);
            }
          }}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
}
