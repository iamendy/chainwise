import { Select, Star, Twitter } from "../icons";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const PendingInfluencers = ({ campaignId }) => {
  const queryClient = useQueryClient();

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

  const acceptInfluencer = async ({ influencerAdd, pendingId }) => {
    const { data } = await axios.patch(`/api/campaign/accept-influencer`, {
      campaignId,
      pendingId,
      influencerAdd,
    });
    console.log(data);
    return data;
  };

  const {
    isLoading: isLoadingAccept,
    data,
    mutate,
  } = useMutation({
    mutationFn: acceptInfluencer,
    onSuccess: (d) => {
      console.log(d);
      queryClient.invalidateQueries({ queryKey: ["campaign"] });
    },
  });

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-x-4 mb-4">
      {pendingRequests?.map((pending, i) => (
        <div
          key={i}
          className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center"
        >
          <div>
            <a
              target="_blank"
              href={`https://twitter.com/${pending?.influencer?.username}`}
              className="hover:underline cursor-pointer font-semibold"
            >
              @{pending?.influencer?.username}
            </a>

            <p className="text-[14px]">Web3 gaming data analyst</p>

            <div className=" w-fit  flex items-center gap-x-1 leading-none text-[12px] rounded-sm mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="bg-gray-20 w-fit flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                <Twitter />
                <span>2.1k</span>
              </div>

              <div
                onClick={() =>
                  mutate({
                    influencerAdd: pending?.influencer?.userAddress,
                    pendingId: pending?.id,
                  })
                }
                className="bg-slate-200 hover:bg-slate-100 cursor-pointer w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg"
              >
                <Select />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PendingInfluencers;
