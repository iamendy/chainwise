import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
