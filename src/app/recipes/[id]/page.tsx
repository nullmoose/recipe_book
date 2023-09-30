import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import RecipeSerializer from "@/serializers/RecipeSerializer";

export default async function Recipe({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const rawRecipe = await prisma.recipe.findUnique({
    where: { id: id },
    include: { ingredients: { include: { ingredient: true } } },
  })

  if (!rawRecipe) { notFound() }

  const recipe = RecipeSerializer(rawRecipe)

  return (
    <div>
      <p className="text-2xl">{ recipe.name }</p>
      <p className="text-lg">{ recipe.description }</p>

      { recipe.ingredients.map((ingredient) => {
        return <p className="text-base">{ ingredient.name } - { ingredient.quantity }</p>
      }) }

      <p className="text-base">{ recipe.instructions }</p>
    </div>
  )
}
