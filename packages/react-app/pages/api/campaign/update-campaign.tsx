import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PATCH") {
    try {
      console.log(req.body);
      const {
        name,
        websiteUrl,
        twitterUrl,
        startDate,
        endDate,
        userAdd,
        description,
      } = req.body;

      const campaign = await prisma.campaign.update({
        where: {
          id: req.body.id,
        },
        data: {
          name,
          websiteUrl,
          twitterUrl,
          startDate,
          endDate,
          userAdd,
          description,
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
