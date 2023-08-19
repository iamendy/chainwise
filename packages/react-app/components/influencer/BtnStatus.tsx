import { RoundCheck, Select } from "../icons";
import { useAccount } from "wagmi";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const BtnStatus = ({ campaignId }) => {
  const [toggleApply, setToggleApply] = useState(false);
  const { address: influencerAdd } = useAccount();
  const queryClient = useQueryClient();

  const applyForCampaign = async () => {
    const data = await axios.post("/api/campaign/apply-for-campaign", {
      influencerAdd,
      campaignId: campaignId,
    });
    return data;
  };

  const retrieveStatus = async () => {
    const { data } = await axios.post(
      `/api/campaign/get-influencer-campaign-status`,
      {
        influencerAdd,
        campaignId,
      }
    );
    return data;
  };

  const { data: applied } = useQuery({
    queryFn: retrieveStatus,
    queryKey: ["apply", campaignId, influencerAdd],
  });

  const {
    isLoading,
    data,
    mutate: apply,
  } = useMutation({
    mutationFn: applyForCampaign,
    onSuccess: () => {
      setToggleApply(false);
      queryClient.invalidateQueries({
        queryKey: ["apply"],
      });
    },
  });

  return (
    <>
      {applied === null ? (
        <button
          onClick={() => setToggleApply(!toggleApply)}
          className="flex py-1 px-2 hover:bg-black/80 active:bg-black rounded-sm justify-center items-center bg-black text-white "
        >
          <Select />
          <span>Apply </span>
        </button>
      ) : (
        <div className="flex py-1 px-2 bg-gray-400 rounded-sm justify-center items-center text-white ">
          <RoundCheck />
          <span>Applied </span>
        </div>
      )}

      {toggleApply && (
        <div className="absolute flex flex-col bg-gray-50 top-[100%] right-0 w-[200px] p-2 shadow">
          <span>Apply for this promotion? </span>
          <div className="flex gap-x-2 mt-1 justify-end">
            <button
              onClick={() => apply()}
              className="bg-black text-white leading-none px-2 py-1 rounded-md text-sm"
            >
              Yes
            </button>{" "}
            <button
              onClick={() => setToggleApply(false)}
              className="border border-black leading-none px-2 py-1 rounded-md text-sm"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default BtnStatus;
