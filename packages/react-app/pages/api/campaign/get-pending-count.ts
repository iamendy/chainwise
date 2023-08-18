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
      const applied = await prisma.influencerCampaign.findMany({
        where: {
          campaignId,
        },
      });

      res.status(200).json({ count: applied?.length });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
