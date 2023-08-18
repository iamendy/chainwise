/*
  Warnings:

  - You are about to drop the column `influencerId` on the `campaigns` table. All the data in the column will be lost.
  - Added the required column `tagline` to the `influencers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_influencerId_fkey";

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "influencerId",
ADD COLUMN     "influencerAddress" TEXT;

-- AlterTable
ALTER TABLE "influencers" ADD COLUMN     "tagline" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_influencerAddress_fkey" FOREIGN KEY ("influencerAddress") REFERENCES "influencers"("userAddress") ON DELETE SET NULL ON UPDATE CASCADE;
