import { useState } from "react";
import SearchParams from "../models/SearchParams";
import "./RecipeSearchForm.css";

export default function RecipeSearchForm({
  onSubmit,
}: {
  onSubmit: (searchParams: SearchParams) => void;
}) {
  const [recipeQuery, setRecipeQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [mealType, setMealType] = useState("");

  return (
    <div className="RecipeSearchForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ recipeQuery, diet, mealType });
        }}
      >
        <label className="label">Search by Name: </label>
        <input
          className="input"
          type="text"
          value={recipeQuery}
          onChange={(e) => {
            setRecipeQuery(e.target.value);
          }}
        />
        <div className="label">
          <label className="label" htmlFor="diet" /> Diet:
          <select
            id="select"
            name="diet"
            onChange={(e) => {
              console.log(e.target.value);
              setDiet(e.target.value);
            }}
          >
            <option value="" defaultChecked>
              optional
            </option>
            <option value="balanced">balanced</option>
            <option value="high-fiber">high-fiber</option>
            <option value="high-protein">high-protein</option>
            <option value="low-carb">low-carb</option>
            <option value="low-fat">low-fat</option>
            <option value="low-protein">low-protein</option>
            <option value="low-sodium">low-sodium</option>
          </select>
        </div>
        <label className="label" htmlFor="meal-type">
          {" "}
          Meal-Type:
          <select
            id="select"
            name="meal-type"
            onChange={(e) => {
              console.log(e.target.value);
              setMealType(e.target.value);
            }}
          >
            <option value="" defaultChecked>
              optional
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch-">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Tea-Time">Tea-Time</option>
          </select>
        </label>
        <div className="searchButton">
          <button type="submit" className="searchButton">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
