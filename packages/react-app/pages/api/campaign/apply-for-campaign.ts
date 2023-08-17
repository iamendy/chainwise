import prisma from "../../../prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      //get user session
      const { user } = await getServerSession(req, res, authOptions);

      //get influencer address
      const { influencerAdd, campaignId } = req.body;
      console.log(influencerAdd, campaignId);
      //abort if no valid session
      if (!user) {
        res.status(401).json({ message: "You must be signed in." });
        return;
      }

      //twitter API not free. discarded
      //https://api.twitter.com/2/users/me
      //https://api.twitter.com/2/users/${session?.user?.id}?user.fields=public_metrics
      // await axios
      //   .get(`https://api.twitter.com/2/users`, {
      //     headers: {
      //       Authorization: `Bearer ${session.accessToken}`,
      //     },
      //   })

      //get influencer
      let influencer = await prisma.influencer.findUnique({
        where: {
          userAddress: influencerAdd,
        },
      });

      //influencer does not exist?
      if (!influencer?.id) {
        //create influencer profile.
        influencer = await prisma.influencer.create({
          data: {
            username: user.username,
            userAddress: influencerAdd,
          },
        });
      }

      //add to campaign-influencer list
      await prisma.influencerCampaign.create({
        data: {
          campaignId,
          influencerAddress: influencerAdd,
        },
      });

      res.status(200).json({ msg: "application successful" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res.status(400).json({ msg: "Not Found" });
  }
}
