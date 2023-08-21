import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const campaignId = req?.query.campaignId;

    try {
      const milestones = await prisma.milestones.findMany({
        where: {
          //@ts-ignore
          campaignId,
        },
        include: {
          campaign: true,
        },
      });

      res.status(200).json(milestones);
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
