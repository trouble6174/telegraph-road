import React from "react";

export default function RecipeIngredientEdit({id, name, amount, handleIngredientChange, handleIngredientRemove}) {
    function handleChange(changes) {
        handleIngredientChange(id, {id, name, amount, ...changes})
    }


    return (
        <>
            <input
                type="text"
                value={name}
                onChange={e => handleChange({name: e.target.value})}
                className="recipe-edit__input"
            />
            <input
                type="text"
                value={amount}
                onChange={e => handleChange({amount: e.target.value})}
                className="recipe-edit__input"
            />
            <button className="btn btn--danger" onClick={() => handleIngredientRemove(id)}>&times;</button>
        </>
    )
}