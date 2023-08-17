import prisma from "../../../prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import axios from "axios";

type Data = {
  msg: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //get user session
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  //get influencer address
  const address = req.body;

  //abort if no valid session
  if (!session) {
    res.status(401).json({ message: "You must be signed in." });
    return;
  }

  if (req.method === "POST") {
    try {
      axios
        .get(
          `https://api.twitter.com/2/users/1531472680037371905?user.fields=public_metrics`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        )
        .then((d) => {
          console.log(d);
          return res.status(200).json({ d });
        })
        .catch((e) => console.log(e));
      //get session and check record?

      //use details to connect twitter

      //create influencer profile.

      //apply for the promotion

      res.status(200).json({ msg: "reached" });
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
