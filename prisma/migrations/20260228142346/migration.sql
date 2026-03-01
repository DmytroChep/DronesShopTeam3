/*
  Warnings:

  - Added the required column `deliveryAddress` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "trackingNumber" TEXT,
    "deliveryAddress" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "userAdressId" INTEGER,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_userAdressId_fkey" FOREIGN KEY ("userAdressId") REFERENCES "Adress" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "id", "status", "totalPrice", "userAdressId", "userId") SELECT "createdAt", "id", "status", "totalPrice", "userAdressId", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
