-- CreateTable
CREATE TABLE "_OrderToOrderProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_OrderToOrderProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OrderToOrderProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToOrderProduct_AB_unique" ON "_OrderToOrderProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToOrderProduct_B_index" ON "_OrderToOrderProduct"("B");
