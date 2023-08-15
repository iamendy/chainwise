import prisma from "../../../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const reqMilestones = req.body;

  console.log(reqMilestones);
  if (req.method === "POST") {
    //res.status(200).json({ msg: req.body });
    try {
      const milestones = await prisma.milestones.createMany({
        data: reqMilestones,
      });

      res.status(200).json({ milestones });
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
