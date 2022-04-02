import React, {useContext} from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import {RecipeContext} from "./App";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";
import {v4} from 'uuid'

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange} = useContext(RecipeContext)
    const {name, servings, cookTime, instructions, ingredients} = recipe

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ingredients: newIngredients})
    }

    function handleIngredientRemove(id) {
        const newIngredients = [...recipe.ingredients]
        handleChange({ingredients: newIngredients.filter(i => i.id !== id)})
    }

    function handleIngredientAdd() {
        const newIngredients = [...recipe.ingredients]
        newIngredients.push({id: v4(), name: '', amount: ''})
        handleChange({ingredients: newIngredients})
    }


    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="recipe-edit__remove-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label
                    htmlFor="name"
                    className="recipe-edit__label"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={e => handleChange({name: e.target.value})}
                    className="recipe-edit__input"
                />
                <label
                    htmlFor="cookTime"
                    className="recipe-edit__label"
                >Cook Time</label>
                <input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    value={cookTime}
                    onChange={e => handleChange({cookTime: e.target.value})}
                    className="recipe-edit__input"/>
                <label
                    htmlFor="servings"
                    className="recipe-edit__label"
                >Servings</label>
                <input
                    type="number"
                    min="1"
                    name="servings"
                    id="servings"
                    value={servings}
                    onChange={e => handleChange({servings: parseInt(e.target.value) || ''})}
                    className="recipe-edit__input"
                />
                <label
                    htmlFor="instructions"
                    className="recipe-edit__label"
                >Instructions</label>
                <textarea
                    name="instructions"
                    id="instructions"
                    value={instructions}
                    onChange={e => handleChange({instructions: e.target.value})}
                    className="recipe-edit__input"/>
            </div>
            <br/>
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div/>
                {ingredients.map(ing => <RecipeIngredientEdit key={ing.id}
                                                              handleIngredientRemove={handleIngredientRemove}
                                                              handleIngredientChange={handleIngredientChange}
                                                              {...ing}/>)}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary" onClick={handleIngredientAdd}>Add Ingredients</button>
            </div>
        </div>
    )
}