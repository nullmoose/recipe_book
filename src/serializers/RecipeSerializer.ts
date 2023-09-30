import { RecipeWithRelations } from "@/lib/prisma";

export default function RecipeSerializer(recipe: RecipeWithRelations) {
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
