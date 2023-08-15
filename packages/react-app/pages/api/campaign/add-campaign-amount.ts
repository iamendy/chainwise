import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { campaignId, amount } = req.body;

    const campaign = await prisma.campaign.update({
      where: {
        id: campaignId,
      },
      data: {
        amount,
        status: 0,
      },
    });

    res.status(200).json({ msg: campaign });
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
