import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const address = req?.query.address;

    try {
      const earnings = await prisma.campaign.findMany({
        where: {
          //@ts-ignore
          influencerAddress: address,
          status: 1,
        },
        select: {
          amount: true,
        },
      });

      //sum amounts
      const totalAmount = earnings.reduce((acc, current) => {
        //@ts-ignore
        const amount = parseFloat(current.amount);
        if (!isNaN(amount)) {
          return acc + amount;
        }
        return acc;
      }, 0);

      res.status(200).json(totalAmount);
    } catch (e) {
      return res.status(500).json({ msg: e });
    }
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
