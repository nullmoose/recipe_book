import { Ingredient } from "@prisma/client";
import React from "react";

export default function QuantityForm(props: { ingredient: Ingredient }) {

  return (
    <div>
      <p>{props.ingredient.name}</p>
      <input type="text" />
    </div>
  )
}
