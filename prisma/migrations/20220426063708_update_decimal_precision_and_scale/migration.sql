/*
  Warnings:

  - You are about to alter the column `discount_percentage` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `rating` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `stock` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "product" ALTER COLUMN "discount_percentage" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "rating" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "stock" SET DATA TYPE DECIMAL(10,2);
