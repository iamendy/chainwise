import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import InfluencerCard from "./InfluencerCard";
const PendingInfluencers = ({ campaignId }) => {
  const getInfluencers = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-pending-influencers?campaignId=${campaignId}`
    );

    return data;
  };

  const { isLoading, data: pendingRequests } = useQuery({
    queryFn: getInfluencers,
    queryKey: ["influencers"],
  });

  return (
    <div className="grid grid-cols-3 gap-x-4 mb-4">
      {pendingRequests?.map((pending, i: number) => (
        <InfluencerCard
          key={i}
          pendingId={pending?.id}
          influencer={pending?.influencer}
          campaignId={pending?.campaignId}
        />
      ))}
    </div>
  );
};
export default PendingInfluencers;
