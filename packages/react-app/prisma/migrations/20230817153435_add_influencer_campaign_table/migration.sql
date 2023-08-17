-- CreateTable
CREATE TABLE "influencer-campaign" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "influencerId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "influencer-campaign_pkey" PRIMARY KEY ("id")
);
