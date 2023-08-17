import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      const campaigns = await prisma.campaign.findMany({
        where: {
          status: 0,
        },
        include: {
          milestones: true,
        },
      });

      res.status(200).json({ campaigns });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
