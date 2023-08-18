import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PATCH") {
    const { campaignId, pendingId, influencerAdd } = req.body;
    console.log(campaignId, pendingId, influencerAdd);
    try {
      //update the milestone
      await prisma.campaign.update({
        where: {
          id: campaignId,
        },
        data: {
          influencerAddress: influencerAdd,
          status: 2,
        },
      });

      await prisma.influencerCampaign.update({
        where: {
          id: pendingId,
        },
        data: {
          status: true,
        },
      });

      res.status(200).json({ msg: "Accepted successfully" });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
