import { HitsEntity } from "../models/RecipeSearchResponseInterface";

export default function RecipeHit({ recipe, _links }: HitsEntity) {
  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} />
      <p>
        source: <a href={recipe.url}> {recipe.source}</a>
      </p>
    </div>
  );
}
