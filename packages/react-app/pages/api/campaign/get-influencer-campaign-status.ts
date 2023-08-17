import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { campaignId, influencerAddress } = req.body;
    console.log(campaignId, influencerAddress);
    try {
      const applied = await prisma.influencerCampaign.findFirst({
        where: {
          campaignId,
          influencerAddress,
        },
      });
      //stopped here
      console.log(applied);

      res.status(200).json(applied);
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
