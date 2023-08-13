import prisma from "../../../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const user = await prisma.user.create({
      data: {
        address: req.body.address,
      },
    });
    res.status(200).json({ msg: user });
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
