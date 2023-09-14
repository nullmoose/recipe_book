import { Recipe } from "@prisma/client";

export default function RecipeSerializer(recipe: Recipe) {
  const ingredients = recipe?.ingredients.map((recipeIngredient) => {
    return {
      quantity: recipeIngredient.quantity,
      name: recipeIngredient.ingredient.name,
    }
  })
  return {
    ...recipe,
    ingredients: ingredients,
  }
}
