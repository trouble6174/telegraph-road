import React from "react";
import RecipeList from "./RecipeList";
import 'normalize.css';
import '../css/app.css'
import {useState} from "react";
import {v4} from 'uuid'

export const RecipeContext = React.createContext()

function App() {
    const [recipes, setRecipes] = useState(sampleRecipes)

    function handleRecipeAdd() {
        const newRecipe = {
            id: v4(),
            name: "New",
            cookTime: '1:00',
            servings: 1,
            instructions: '1:00',
            ingredients: [
                {id: v4(), name: 'name', amount: '1 g'}
            ]
        }
        setRecipes([...recipes, newRecipe])
    }

    function handleRecipeDelete(id) {
        setRecipes(recipes.filter(rc => rc.id !== id))
    }

    return (
        <RecipeContext.Provider value={
            {
                handleRecipeAdd,
                handleRecipeDelete
            }
        }>
            <RecipeList recipes={recipes}/>
        </RecipeContext.Provider>
    )
}


const sampleRecipes = [
    {
        id: 1,
        name: 'Plain Chicken',
        servings: 3,
        cookTime: '1:45',
        instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
        ingredients: [
            {
                id: 1,
                name: 'Chicken',
                amount: '2 Pounds'
            },
            {
                id: 2,
                name: 'Salt',
                amount: '1 Tbs'
            }
        ]
    },
    {
        id: 2,
        name: 'Plain Pork',
        servings: 5,
        cookTime: '0:45',
        instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
        ingredients: [
            {
                id: 1,
                name: 'Pork',
                amount: '3 Pounds'
            },
            {
                id: 2,
                name: 'Paprika',
                amount: '2 Tbs'
            }
        ]
    }
]
export default App;
