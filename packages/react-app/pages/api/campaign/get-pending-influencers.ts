import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const { campaignId } = req.query;
    console.log(campaignId);
    try {
      const influencers = await prisma.influencerCampaign.findMany({
        where: {
          //@ts-ignore
          campaignId,
        },
        include: {
          influencer: true,
        },
      });

      console.log(influencers);

      res.status(200).json(influencers);
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
