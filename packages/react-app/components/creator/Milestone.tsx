import axios from "axios";
import { Check, RoundCheck } from "../icons";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../../constants";
import { Milestone } from "../../types";

interface Props {
  milestone: Milestone;
  amountPerMilestone: number;
}
const Milestone = ({ milestone, amountPerMilestone }: Props) => {
  const [toggle, setToggle] = useState(false);
  const queryClient = useQueryClient();

  //decline approve
  const decline = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setToggle(false);
  };

  const updateMilestone = async () => {
    await axios.patch(`/api/campaign/approve-milestone`, {
      milestoneId: milestone?.id,
    });
  };

  const { mutate } = useMutation({
    mutationFn: updateMilestone,
    onSuccess: () => {
      // Invalidate
      console.log("write to db");
      setToggle(false);
    },
  });

  //call on-chain function to match Influencer
  const { config } = usePrepareContractWrite({
    //@ts-ignore
    address: connect.address,
    abi: connect.abi,
    functionName: "payMilestone",
    args: [milestone?.campaign?.id],
  });

  const {
    writeAsync,
    isLoading: isLoadingMatch,
    data,
  } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      console.log("write to blockchain success");
      queryClient.invalidateQueries({ queryKey: ["milestones"] });
      queryClient.invalidateQueries({ queryKey: ["campaign"] });
    },
  });

  const payMilestone = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    await writeAsync?.();
    mutate();
  };

  return (
    <div
      className={`${
        milestone.status == 2
          ? "text-gray-500 line-through pointer-events-none"
          : ""
      } relative flex  p-2 rounded-md items-center justify-between px-2`}
    >
      <div>
        <div className="flex items-center gap-x-1">
          <p className="font-semibold"> {milestone?.title}</p>
          {milestone?.status == 2 && <Check />}
        </div>
        <p>{milestone?.description}</p>

        <div
          className={`${
            toggle ? "block" : "hidden"
          } absolute top-0 right-0 z-40 h-full bg-gray-50 border rounded-md px-2 py-1`}
        >
          Approve delivery?
          <br />
          <button
            onClick={(e) => payMilestone(e)}
            className="bg-black text-white leading-none px-2 py-1 rounded-md text-sm"
          >
            Yes
          </button>{" "}
          <button
            onClick={(e) => decline(e)}
            className="border border-black leading-none px-2 py-1 rounded-md text-sm"
          >
            No
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          {Math.round((amountPerMilestone + Number.EPSILON) * 100) / 100} MATIC
        </div>
        {/* Milestone must be ongoing */}
        {milestone?.status == 1 && (
          <div
            onClick={() => setToggle(true)}
            className="bg-gray-200 w-8 h-8 cursor-pointer flex hover:bg-gray-300 active:bg-gray-200 items-center justify-center rounded-full overflow-hidden"
          >
            <RoundCheck />
          </div>
        )}
      </div>
    </div>
  );
};
export default Milestone;
