import React, { ReactNode, useState } from "react";
import FavoritesList from "../components/FavoritesList";
import RecipeDetailsInterface from "../models/RecipeDetailsInterface";

interface FavoritesProps {
  addToFavorites: (recipe: RecipeDetailsInterface) => void;
  removeFromFavorites: (uri: string) => void;
  favoritesList: RecipeDetailsInterface[];
}

const defaultValues: FavoritesProps = {
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  favoritesList: [],
};

export const Favorites = React.createContext<FavoritesProps>(defaultValues);

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoritesList, setFavoritesList] = useState<RecipeDetailsInterface[]>(
    []
  );
  function addToFavorites(recipe: RecipeDetailsInterface): void {
    console.log("this is the recipe", recipe);
    //copy then modify
    let newFavoritesList = [...favoritesList];
    newFavoritesList.push(recipe);
    setFavoritesList(newFavoritesList);
    console.log("this is the favorites list:", favoritesList);
  }

  function removeFromFavorites(uri: string): void {
    //copy then modify
    let newFavoritesList = [...favoritesList];
    let foundIndex = newFavoritesList.findIndex(
      (recipe) => recipe.recipe.uri == uri
    );
    newFavoritesList.splice(foundIndex, 1);
    setFavoritesList(newFavoritesList);
  }

  return (
    <Favorites.Provider
      value={{ addToFavorites, removeFromFavorites, favoritesList }}
    >
      {children}
    </Favorites.Provider>
  );
}
