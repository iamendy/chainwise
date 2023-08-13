import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // const {name, website, twitter, startDate, endDate} = req.body;

    res.status(200).json({ msg: req.body });
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
