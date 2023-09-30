/*
  Warnings:

  - You are about to alter the column `quantity` on the `RecipeIngredients` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RecipeIngredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantity" REAL,
    "quantityType" TEXT,
    CONSTRAINT "RecipeIngredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecipeIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RecipeIngredients" ("id", "ingredientId", "quantity", "recipeId") SELECT "id", "ingredientId", "quantity", "recipeId" FROM "RecipeIngredients";
DROP TABLE "RecipeIngredients";
ALTER TABLE "new_RecipeIngredients" RENAME TO "RecipeIngredients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
