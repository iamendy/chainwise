import CreatorLayout from "../../components/layouts/CreatorLayout";
import { Tasks, Completed, Card, Twitter, Bolt } from "../../components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import axios from "axios";
import OngoingCampaign from "../../components/OngoingCampaign";
import CompletedCampaign from "../../components/CompletedCampaign";
import PendingTab from "../../components/PendingTab";
import OngoingTab from "../../components/OngoingTab";
import CompletedTab from "../../components/CompletedTab";
import { isError, useQuery } from "@tanstack/react-query";
import PendingCampaign from "../../components/PendingCampaign";
import { Campaign } from "../../types";
import connect from "../../constants";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Pending");

  const tabs = ["Pending", "Ongoing", "Completed"];

  const { address } = useAccount();

  //get all user campaign
  const getCampaigns = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-user-campaigns?address=${address}`
    );
    return data.campaigns;
  };

  const { data: campaigns } = useQuery({
    queryKey: ["campaigns"],
    queryFn: getCampaigns,
  });

  //filter campaigns by status
  const pending = campaigns?.filter((d: Campaign) => d.status == 0);
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
      <div className="grid grid-cols-3 gap-2">
        <PendingCampaign count={pending?.length} />

        <OngoingCampaign count={ongoing?.length} />

        <CompletedCampaign count={completed?.length} />

        <div className="col-span-3 flx justify-ed rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Card />
          </div>
          <div>
            <b>{total || 0} MATIC</b>
            <p className="text-[14px]"> Marketing goals </p>
          </div>
        </div>
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
        {selectedTab == "Pending" ? (
          <PendingTab campaigns={pending} />
        ) : selectedTab == "Ongoing" ? (
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
