import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Campaign from "../../components/influencer/Campaign";
import { Campaign as CampaignType } from "../../types";

const ViewCampaigns = () => {
  const getActiveCamapigns = async () => {
    const { data } = await axios.get("/api/campaign/get-active-campaigns");
    return data.campaigns;
  };

  const { data: campaigns, isLoading } = useQuery({
    queryFn: getActiveCamapigns,
    queryKey: ["activeCampaigns"],
  });

  return (
    <>
      <h3 className=" mb-4">Listed Campaigns</h3>
      <div className="mt-5 rounded-xl bg-white p-4 shadow">
        {campaigns?.length > 0 ? (
          <div className="lg:grid lg:grid-cols-2 gap-3">
            {campaigns?.map((d: CampaignType, i: number) => (
              <Campaign key={i} campaign={d} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-4 min-h-[150px] flex items-center justify-center">
            <p>No Listed Campaigns found</p>
          </div>
        )}
      </div>
    </>
  );
};
export default ViewCampaigns;
