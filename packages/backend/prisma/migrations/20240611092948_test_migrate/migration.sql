/*
  Warnings:

  - You are about to drop the column `authorId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `content` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_authorId_fkey";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "authorId",
ALTER COLUMN "content" SET NOT NULL;

-- DropTable
DROP TABLE "User";
