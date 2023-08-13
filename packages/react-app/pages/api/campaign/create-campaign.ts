import prisma from "../../../prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { name, websiteUrl, twitterUrl, startDate, endDate, amount } =
      req.body;
    console.log(req.body);
    try {
      const campaign = await prisma.campaign.create({
        data: {
          name,
          websiteUrl,
          twitterUrl,
          startDate: new Date(),
          endDate: new Date(),
          amount,
        },
      });
      console.log(campaign);

      res.status(200).json({ campaign });
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
