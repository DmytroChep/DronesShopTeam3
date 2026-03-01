-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Adress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "postDepartament" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "appartament" INTEGER NOT NULL,
    "entrants" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Adress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Adress" ("appartament", "city", "entrants", "home", "id", "postDepartament", "street", "userId") SELECT "appartament", "city", "entrants", "home", "id", "postDepartament", "street", "userId" FROM "Adress";
DROP TABLE "Adress";
ALTER TABLE "new_Adress" RENAME TO "Adress";
CREATE UNIQUE INDEX "Adress_id_key" ON "Adress"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
