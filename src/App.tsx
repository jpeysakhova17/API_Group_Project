import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}

//this is Taz's key:
//api.edamam.com/api/recipes/v2?q=chicken%20TIKKA%20MASALA&app_id=4643c294&app_key=9fbafa480e2cf82ad18286211eec0d48&type=public
export default App;
