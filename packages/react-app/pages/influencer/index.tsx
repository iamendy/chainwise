import { Card } from "../../components/icons";
import { useState } from "react";
import { useAccount } from "wagmi";
import axios from "axios";
import OngoingCampaign from "../../components/OngoingCampaign";
import CompletedCampaign from "../../components/CompletedCampaign";
import PendingTab from "../../components/PendingTab";
import OngoingTab from "../../components/OngoingTab";
import CompletedTab from "../../components/CompletedTab";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Ongoing");

  const tabs = ["Ongoing", "Completed"];

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

  //filter campaigns by status
  const completed = campaigns?.filter((d) => d.status == 1);
  const ongoing = campaigns?.filter((d) => d.status == 2);

  //retrieve amounts
  const amounts = campaigns?.filter((d) => d.status >= 0).map((d) => d.amount);

  //sum amounts
  const total = amounts?.reduce((acc, currentValue) => {
    return acc + parseFloat(currentValue);
  }, 0);

  return (
    <>
      <div className="flex justify-between items-center">
        <OngoingCampaign count={ongoing?.length} />

        <CompletedCampaign count={completed?.length} />

        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Card />
          </div>
          <div>
            <b>{total || 0} CELO</b>
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

{
  /* <div className="mb-6 flex justify-between items-center">
  <h3>Welcome, 0x323</h3>

  <div className="flex items-center gap-x-2">
    <div className="flex">
      <Star big={true} />
      <Star big={true} />
      <Star big={true} />
      <Star big={true} />
    </div>

    <div className="text-sm">4.2/5 ratings</div>
  </div>
</div>; */
}
