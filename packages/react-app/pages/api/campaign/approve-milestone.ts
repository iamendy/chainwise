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
      const milestone = await prisma.milestones.update({
        where: {
          id: req.body.milestoneId,
        },
        data: {
          status: 2,
        },
      });

      res.status(200).json({ milestone });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
