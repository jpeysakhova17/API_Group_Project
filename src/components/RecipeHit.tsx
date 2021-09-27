import { HitsEntity } from "../models/RecipeSearchResponseInterface";
import { Link } from "react-router-dom";
import { Favorites } from "../context/FavoritesProvider";
import RecipeDetailsInterface from "../models/RecipeDetailsInterface";
import { useContext, useEffect, useState } from "react";
import "./RecipeHit.css";
import getDetails from "../services/getDetails";

export default function RecipeHit({ recipe, _links }: HitsEntity) {
  const anotherId = recipe.uri.slice(recipe.uri.indexOf("#") + 1);

  console.log("the id is: ", anotherId);
  const [details, setDetails] = useState<RecipeDetailsInterface>();
  const id = document.location.pathname.slice(1);

  const fetchedDetails = useEffect(() => {
    getDetails(id).then((data) => setDetails(data));
  }, []);

  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  // const thisRecipeIsAFavorite: boolean = favoritesList.some(
  //   (favorite) => favorite.recipe.uri == details?.recipe.uri
  // );
  return (
    <div className="recipe">
      <Link className="link" to={anotherId}>
        <h1 className="recipes">{recipe.label}</h1>
      </Link>
      <img className="image" src={recipe.image} />
      <p className="recipes">
        source: <a href={recipe.url}> {recipe.source}</a>
      </p>
      <button
        className="favoritesButton"
        onClick={() => {
          console.log("these are the details,", details);
          if (details) {
            addToFavorites(details);
          }
        }}
      >
        Add to Favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>{" "}
      </button>
    </div>
  );
}
