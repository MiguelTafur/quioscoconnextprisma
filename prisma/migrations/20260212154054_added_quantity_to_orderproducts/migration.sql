/*
  Warnings:

  - Added the required column `quantity` to the `orderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orderProducts" ADD COLUMN     "quantity" INTEGER NOT NULL;
