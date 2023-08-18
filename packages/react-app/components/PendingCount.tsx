import axios from "axios";
import { Bolt } from "./icons";
import { useQuery } from "@tanstack/react-query";

const PendingCount = ({ campaignId }) => {
  const getPendingCount = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-pending-count?campaignid=${campaignId}`
    );
    return data.count;
  };

  const { data: count, isLoading } = useQuery({
    queryFn: getPendingCount,
    queryKey: ["count", campaignId],
  });

  return (
    <div className="absolute top-2 right-2">
      <div className="bg-slate-200 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
        <Bolt />
        <span className="text-sm font-semibold">{count}</span>
      </div>
    </div>
  );
};
export default PendingCount;
