import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      const campaign = await prisma.campaign.findFirst({
        where: {
          id: req?.query.id,
        },
        include: {
          milestones: true,
        },
      });

      res.status(200).json({ campaign });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
