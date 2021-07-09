import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id); //? async function promise donduruyor, fakat icinde birsey dondurmedigi icin variable'a atamaya gerek yok.

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipes));

/* window.addEventListener("hashchange", controlRecipes);
window.addEventListener("load", controlRecipes); */
