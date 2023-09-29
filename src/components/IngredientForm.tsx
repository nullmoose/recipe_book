"use client";

import React from "react";
import { Ingredient } from "@prisma/client";
import { useState, useRef } from "react";

export default function IngredientForm(props: { ingredients: Ingredient[] }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredientsSelectRef = useRef(null);

  function selectHandler() {
    const selectedIngredient = props.ingredients.find(function(ingredient) {
      return ingredient.id.toString() == ingredientsSelectRef.current.value
    })

    if (selectedIngredient) {
      setSelectedIngredients([...selectedIngredients, selectedIngredient])
    }
  }

  return(
    <div>
      <label htmlFor="ingredients">Ingredients</label>
      <select defaultValue="default" id="ingredients" onChange={selectHandler} ref={ingredientsSelectRef}>
        <option value="default" disabled>Select an ingredient</option>
        {props.ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
        ))}
      </select>
      <div>
        {selectedIngredients.map((ingredient) => (
          <p>{ingredient.name}</p>
        ))}
      </div>
    </div>
  )
}
