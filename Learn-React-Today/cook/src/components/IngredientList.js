import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ingredients}) {
    const ingredientElements = ingredients.map(ing => (<Ingredient key={ing.id}  {...ing} />))
    return (
        <div className="ingredient-grid">
            {ingredientElements}
        </div>
    )
}