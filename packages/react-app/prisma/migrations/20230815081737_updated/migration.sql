-- AlterTable
ALTER TABLE "campaigns" ALTER COLUMN "status" SET DEFAULT -1;

-- AlterTable
ALTER TABLE "milestones" ALTER COLUMN "description" DROP NOT NULL;
