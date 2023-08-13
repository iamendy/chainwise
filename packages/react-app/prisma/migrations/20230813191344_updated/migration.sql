/*
  Warnings:

  - Added the required column `userAdd` to the `campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "userAdd" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_userAdd_fkey" FOREIGN KEY ("userAdd") REFERENCES "users"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
