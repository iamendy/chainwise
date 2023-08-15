import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PATCH") {
    try {
      //update the milestone
      const milestone = await prisma.milestones.update({
        where: {
          id: req.body.milestoneId,
        },
        include: {
          campaign: true,
        },
        data: {
          status: 2,
        },
      });

      //get all milestones with campaign
      const milestones = await prisma.milestones.findMany({
        where: {
          campaignId: milestone.campaignId,
        },
      });

      //filter approved milestones
      const approved = milestones.filter((d) => d.status == 2);

      //if all approved milestones? update campaign completed
      if (approved.length == milestones.length) {
        await prisma.campaign.update({
          where: {
            id: milestone.campaign.id,
          },
          data: {
            status: 1,
          },
        });
      }

      res.status(200).json({ milestone });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
