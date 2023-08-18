-- AddForeignKey
ALTER TABLE "influencer-campaign" ADD CONSTRAINT "influencer-campaign_influencerAddress_fkey" FOREIGN KEY ("influencerAddress") REFERENCES "influencers"("userAddress") ON DELETE RESTRICT ON UPDATE CASCADE;
