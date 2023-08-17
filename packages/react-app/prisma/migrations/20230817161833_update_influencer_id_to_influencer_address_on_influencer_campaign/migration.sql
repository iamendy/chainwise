/*
  Warnings:

  - You are about to drop the column `influencerId` on the `influencer-campaign` table. All the data in the column will be lost.
  - Added the required column `influencerAddress` to the `influencer-campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "influencer-campaign" DROP COLUMN "influencerId",
ADD COLUMN     "influencerAddress" TEXT NOT NULL;
