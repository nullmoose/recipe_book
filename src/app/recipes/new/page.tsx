import React from "react";
import prisma from "@/lib/prisma";
import RecipeForm from "@/components/RecipeForm";

export default async function NewRecipe() {
  const ingredients = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true,
    }
  })

  return (
    <div>
      <RecipeForm ingredients={ingredients} />
    </div>
  )
}
