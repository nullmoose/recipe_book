import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const recipeId = req.query.id
  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(recipeId) },
    include: { ingredients: { include: { ingredient: true } } },
  })
  const ingredients = recipe?.ingredients.map((recipeIngredient) => {
    return {
      quantity: recipeIngredient.quantity,
      name: recipeIngredient.ingredient.name,
    }
  })
  return res.status(200).json({
    ...recipe,
    ingredients: ingredients,
  })
}
