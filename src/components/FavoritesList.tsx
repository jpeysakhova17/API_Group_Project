import { Favorites } from "../context/FavoritesProvider";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoritesList.css";

export default function FavoritesList() {
  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);

  useEffect(() => {
    favoritesList.push(
      JSON.parse(localStorage.getItem("recipeSearchResponse")!)
    );
  }, []);

  return (
    <div className="favoritesPage">
      <h1>this is the favorites list</h1>
      <ul>
        {favoritesList.map((favorite, index) => (
          <li key={index}>
            <Link
              to={
                "/" +
                favorite.recipe.uri.slice(favorite.recipe.uri.indexOf("#") + 1)
              }
            >
              <h3>{favorite.recipe.label}</h3>
              <img src={favorite.recipe.image} />
            </Link>
            <button
              onClick={() => {
                // removeFromFavorites(favorite.recipe.uri);
                console.log(favoritesList);
              }}
            >
              Remove Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
