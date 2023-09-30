"use client";

import React from "react";
import { Ingredient } from "@prisma/client";
import { useState, useRef } from "react";

export default function IngredientForm(props: { ingredients: Ingredient[] }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState(props.ingredients);
  const ingredientsSelectRef = useRef(null);

  function selectHandler() {
    const selectedIndex = availableIngredients.findIndex(
      ingredient => ingredient.id.toString() === ingredientsSelectRef.current.value
    )

    if (selectedIndex >= 0) {
      const selectedIngredient = availableIngredients[selectedIndex]
      setSelectedIngredients([...selectedIngredients, selectedIngredient])
      availableIngredients.splice(selectedIndex, 1)
      setAvailableIngredients([...availableIngredients]);
    }
  }

  return(
    <div>
      <label htmlFor="ingredients">Ingredients</label>
      <select defaultValue="default" id="ingredients" onChange={selectHandler} ref={ingredientsSelectRef}>
        <option value="default" disabled>Select an ingredient</option>
        {availableIngredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
        ))}
      </select>
      <div>
        {selectedIngredients.map((ingredient: Ingredient) => (
          <p>{ingredient.name}</p>
        ))}
      </div>
    </div>
  )
}
