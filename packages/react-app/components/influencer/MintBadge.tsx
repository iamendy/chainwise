import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../../constants";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MintBadge = ({ influencerAdd, refetch }) => {
  //Mint soulbound verification NFT for Influencer
  const { config } = usePrepareContractWrite({
    address: connect.address,
    abi: connect.abi,
    functionName: "activateInfluencerVerification",
    args: [influencerAdd],
  });

  const { write: mint, isLoading, data: tx } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: tx?.hash,
    onSuccess() {
      console.log("write to blockchain success");
      mutate();
    },
  });

  const updateInfluencerStatus = async () => {
    const { data } = await axios.patch("/api/influencer/update-verification", {
      influencerAdd,
    });

    return data;
  };

  const { mutate } = useMutation({
    mutationFn: updateInfluencerStatus,
    onSuccess: () => {
      console.log("Write DB success");
      refetch?.();
    },
  });

  return (
    <div className="shadow rounded-md bg-green-100 mb-6 p-4">
      <span>
        Congratulations on delivering your first campaign. Claim your
        verification badge to get verified status and enjoy benefits on
        Chainwise.
      </span>

      <div className="mt-2">
        <button
          onClick={() => mint?.()}
          className="bg-black hover:bg-black/80 active:bg-black text-white px-2 py-1 rounded-md"
        >
          Claim Badge
        </button>
      </div>
    </div>
  );
};
export default MintBadge;
