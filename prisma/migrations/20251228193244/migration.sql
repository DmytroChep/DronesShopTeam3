-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "postDepartament" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "appartament" INTEGER NOT NULL,
    "entrants" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Adress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "UserInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "userAdressId" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_userAdressId_fkey" FOREIGN KEY ("userAdressId") REFERENCES "Adress" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "priceInPurchase" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "OrderProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserOrderComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comment" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "UserOrderComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContactsMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "ContactsMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CartsProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amout" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CartsProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductDescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductDescription_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CartsProductToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CartsProductToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "CartsProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CartsProductToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adress_id_key" ON "Adress"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_id_key" ON "UserInfo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userId_key" ON "UserInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderProduct_id_key" ON "OrderProduct"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrderComment_id_key" ON "UserOrderComment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ContactsMessage_id_key" ON "ContactsMessage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CartsProduct_id_key" ON "CartsProduct"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CartsProduct_userId_key" ON "CartsProduct"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDescription_id_key" ON "ProductDescription"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDescription_productId_key" ON "ProductDescription"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CartsProductToProduct_AB_unique" ON "_CartsProductToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CartsProductToProduct_B_index" ON "_CartsProductToProduct"("B");
