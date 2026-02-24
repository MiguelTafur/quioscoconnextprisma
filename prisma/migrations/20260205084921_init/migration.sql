/*
  Warnings:

  - You are about to drop the column `nombre` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `imagen` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Product` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imagen",
DROP COLUMN "nombre",
DROP COLUMN "precio",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
