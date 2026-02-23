-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "middleName" TEXT,
    "birthday" TEXT,
    "phoneNumber" TEXT
);
INSERT INTO "new_User" ("birthday", "email", "id", "isAdmin", "middleName", "name", "password", "phoneNumber", "surname", "username") SELECT "birthday", "email", "id", "isAdmin", "middleName", "name", "password", "phoneNumber", "surname", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
