import getRecipeResponse from "../services/getRecipeResponse";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipe List</h1>
      <button
        onClick={() => {
          getRecipeResponse();
        }}
      >
        Get axios response
      </button>
    </div>
  );
}
