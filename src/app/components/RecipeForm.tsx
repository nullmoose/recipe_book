"use client";

import React from "react";
import { useRef } from "react";

export default function RecipeForm(props: { ingredients: Object[] }) {
  const nameInputRef = useRef(null);
  const prepTimeInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const instructionsInputRef = useRef(null);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Recipe Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="prepTime">Preparation Time</label>
          <input type="text" id="prepTime" ref={prepTimeInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionInputRef} />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" ref={instructionsInputRef} />
        </div>
      </form>
    </div>
  )
}
