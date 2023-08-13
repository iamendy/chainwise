/*
  Warnings:

  - You are about to drop the column `milestoneId` on the `campaigns` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "campaigns_milestoneId_key";

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "milestoneId";
