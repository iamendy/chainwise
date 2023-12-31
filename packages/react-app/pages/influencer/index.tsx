import { Card, Star } from "../../components/icons";
import { useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import axios from "axios";
import OngoingCampaign from "../../components/OngoingCampaign";
import CompletedCampaign from "../../components/CompletedCampaign";
import OngoingTab from "../../components/OngoingTab";
import CompletedTab from "../../components/CompletedTab";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Earnings from "../../components/influencer/Earnings";
import Rating from "../../components/influencer/Rating";
import connect from "../../constants";
import MintBadge from "../../components/influencer/MintBadge";
import Verified from "../../components/icons/Verified";
import { Campaign } from "../../types";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Ongoing");

  const tabs = ["Ongoing", "Completed"];

  const { data: session } = useSession();
  const { address } = useAccount();

  //get all user campaign
  const getCampaigns = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-influencer-campaigns?address=${address}`
    );
    return data.campaigns;
  };

  const { data: campaigns } = useQuery({
    queryKey: ["campaigns"],
    queryFn: getCampaigns,
  });

  const {
    data: res,
    refetch,
  }: { data: Array<boolean> | undefined; refetch: () => void } =
    useContractRead({
      //@ts-ignore
      address: connect.address,
      abi: connect.abi,
      functionName: address && "influencers",
      enabled: true,
      args: [address],
    });

  //filter campaigns by status
  const completed = campaigns?.filter((d: Campaign) => d.status == 1);
  const ongoing = campaigns?.filter((d: Campaign) => d.status == 2);

  //retrieve amounts
  const amounts = campaigns
    ?.filter((d: Campaign) => d.status >= 0)
    .map((d: Campaign) => d.amount);

  //sum amounts
  const total = amounts?.reduce((acc: number, currentValue: string) => {
    return acc + parseFloat(currentValue);
  }, 0);

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h3 className="flex items-center gap-x-1">
          {/* @ts-ignore */}
          Welcome {session?.user?.username}{" "}
          {res && res[0] && res[1] && <Verified />}
        </h3>

        <Rating />
      </div>

      {res && res[0] == true && res[1] == false && (
        <MintBadge influencerAdd={address} refetch={refetch} />
      )}

      <div className="flex justify-between items-center">
        <OngoingCampaign count={ongoing?.length} />

        <CompletedCampaign count={completed?.length} />

        <Earnings />
      </div>

      <div className="mt-5 rounded-xl bg-white p-4 shadow">
        <div className="bg-gray-50 border rounded-lg p-2 mb-4 flex gap-x-2">
          {tabs.map((d, i) => (
            <h3
              key={i}
              onClick={() => setSelectedTab(d)}
              className={`${
                selectedTab == d && "bg-gray-600 text-white"
              } w-fit text-black rounded-md leading-none p-2 cursor-pointer hover:bg-gray-600 active:bg-gray-700 hover:text-white transition-colors`}
            >
              {d} Campaigns
            </h3>
          ))}
        </div>

        {/* Tabs */}
        {selectedTab == "Ongoing" ? (
          <OngoingTab campaigns={ongoing} />
        ) : selectedTab == "Completed" ? (
          <CompletedTab campaigns={completed} />
        ) : (
          <div> Loading.. </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
