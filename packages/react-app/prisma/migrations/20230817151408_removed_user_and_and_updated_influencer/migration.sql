/*
  Warnings:

  - You are about to drop the column `followers` on the `influencers` table. All the data in the column will be lost.
  - You are about to drop the column `profileLink` on the `influencers` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userAddress]` on the table `influencers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `influencers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "influencers" DROP CONSTRAINT "influencers_userAddress_fkey";

-- AlterTable
ALTER TABLE "influencers" DROP COLUMN "followers",
DROP COLUMN "profileLink";

-- DropTable
DROP TABLE "users";

-- CreateIndex
CREATE UNIQUE INDEX "influencers_userAddress_key" ON "influencers"("userAddress");

-- CreateIndex
CREATE UNIQUE INDEX "influencers_username_key" ON "influencers"("username");
