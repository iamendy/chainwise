/*
  Warnings:

  - The `status` column on the `campaigns` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[milestoneId]` on the table `campaigns` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `milestoneId` to the `campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_influencerId_fkey";

-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "milestoneId" TEXT NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL,
ALTER COLUMN "amount" SET DEFAULT '0',
DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "influencerId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "campaigns_milestoneId_key" ON "campaigns"("milestoneId");

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_influencerId_fkey" FOREIGN KEY ("influencerId") REFERENCES "influencers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
