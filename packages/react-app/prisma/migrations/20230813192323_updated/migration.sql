-- AlterTable
ALTER TABLE "users" ALTER COLUMN "isInfluencer" SET DEFAULT false,
ALTER COLUMN "influencerId" DROP NOT NULL;
