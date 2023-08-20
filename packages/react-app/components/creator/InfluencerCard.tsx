import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../../constants";
import { Bolt, Select, Star, Twitter } from "../icons";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Verified from "../icons/Verified";

const InfluencerCard = ({ pendingId, influencer, campaignId }) => {
  const queryClient = useQueryClient();

  const acceptInfluencer = async () => {
    const { data } = await axios.patch(`/api/campaign/accept-influencer`, {
      campaignId,
      pendingId,
      influencerAdd: influencer?.userAddress,
    });

    return data;
  };

  const { data: res } = useContractRead({
    address: connect.address,
    abi: connect.abi,
    functionName: influencer && "influencers",
    args: [influencer?.userAddress],
  });

  const {
    isLoading: isLoadingAccept,
    data,
    mutate: matchDb,
  } = useMutation({
    mutationFn: acceptInfluencer,
    onSuccess: (d) => {
      console.log("write to db sucess");
    },
  });

  //call on-chain function to match Influencer
  const { config } = usePrepareContractWrite({
    address: connect.address,
    abi: connect.abi,
    functionName: "matchCampaign",
    args: [campaignId, influencer?.userAddress],
  });

  const {
    writeAsync,
    isLoading: isLoadingMatch,
    data: tx,
  } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: tx?.hash,
    onSuccess() {
      console.log("write to blockchain success");
      queryClient.invalidateQueries({ queryKey: ["campaign"] });
    },
  });

  const matchInfluencer = async () => {
    await writeAsync?.();
    matchDb();
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
      <div>
        <a
          target="_blank"
          href={`https://twitter.com/${influencer?.username}`}
          className="hover:underline flex items-center gap-x-1 cursor-pointer font-semibold"
        >
          @{influencer?.username} {influencer?.isVerified && <Verified />}
        </a>

        <p className="text-[14px]">Web3 gaming data analyst</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-20 w-fit flex items-center leading-none text-[12px] rounded-sm">
              <Bolt /> <span>{res && parseInt(res[2])}XP</span>
            </div>

            <div className="bg-gray-20 w-fit flex items-center leading-none text-[12px] rounded-sm">
              <Twitter />
              <span>50.3k</span>
            </div>
          </div>

          <div
            onClick={() => matchInfluencer()}
            className="bg-slate-200 hover:bg-slate-100 cursor-pointer w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg"
          >
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfluencerCard;
