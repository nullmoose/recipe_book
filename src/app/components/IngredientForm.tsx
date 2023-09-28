"use client";

import React from "react";
import { Ingredient } from "@prisma/client";

export default function IngredientForm(props: { ingredients: Ingredient[] }) {

  return(
      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <select id="ingredients">
          {props.ingredients.map((ingredient) => (
            <option value={ingredient.id}>{ingredient.name}</option>
          ))}
        </select>
      </div>
  )
}
