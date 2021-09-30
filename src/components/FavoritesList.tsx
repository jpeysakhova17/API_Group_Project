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
      <h1 className="favoritesListTitle">My Favorites</h1>
      <ul>
        {favoritesList.map((favorite, index) => (
          <li key={index}>
            <Link
              to={
                "/" +
                favorite.recipe.uri.slice(favorite.recipe.uri.indexOf("#") + 1)
              }
            >
              <h3 className="favoritesLabel">{favorite.recipe.label}</h3>
              <img src={favorite.recipe.image} />
            </Link>
            <button
              className="removeButtonFavoriteList"
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
