-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductCharacteristic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "coding" TEXT NOT NULL,
    "ufsStorage" TEXT NOT NULL,
    "eMMSStorage" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductCharacteristic_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductCharacteristic" ("coding", "description", "eMMSStorage", "id", "img", "productId", "title", "ufsStorage") SELECT "coding", "description", "eMMSStorage", "id", "img", "productId", "title", "ufsStorage" FROM "ProductCharacteristic";
DROP TABLE "ProductCharacteristic";
ALTER TABLE "new_ProductCharacteristic" RENAME TO "ProductCharacteristic";
CREATE UNIQUE INDEX "ProductCharacteristic_id_key" ON "ProductCharacteristic"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
