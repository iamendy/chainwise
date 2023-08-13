import prisma from "../../../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { title, description, campaignId } = req.body;

  if (req.method === "POST") {
    try {
      const milestone = await prisma.milestones.create({
        data: {
          title,
          description,
          campaignId,
        },
      });

      res.status(200).json({ msg: milestone });
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
