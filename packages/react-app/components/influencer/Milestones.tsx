import axios from "axios";
import Milestone from "./Milestone";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import connect from "../../constants";
import { ethers } from "ethers";
import { Milestone as MilestoneType } from "../../types";

interface Props {
  campaignid: number;
  amount: number;
}
const Milestones = ({ campaignid, amount }: Props) => {
  const [amountPerMilestone, setAmountPerMilestone] = useState<number>(0);
  const [settledPerMilestone, setSettledPerMilestone] = useState<number>(0);

  const getMilestones = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-milestones?campaignId=${campaignid}`
    );

    return data;
  };

  const { data: milestones, isLoading } = useQuery({
    queryFn: getMilestones,
    queryKey: ["milestones", campaignid],
  });

  const {
    isLoading: loadingTotal,
    data: totalPayment,
  }: { isLoading: boolean; data: number | undefined } = useContractRead({
    //@ts-ignore
    address: connect.address,
    abi: connect.abi,
    functionName: "getInfluencerTotalPayment",
    args: [campaignid],
  });

  //watch n calculate.
  useEffect(() => {
    setAmountPerMilestone(amount / milestones?.length);
    if (totalPayment) {
      setSettledPerMilestone(
        //@ts-ignore
        ethers.utils.formatEther(totalPayment) / milestones?.length
      );
    }
  }, [milestones, totalPayment]);

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-y-4">
      {milestones?.map((d: MilestoneType, i: number) => (
        <Milestone
          milestone={d}
          amountPerMilestone={amountPerMilestone}
          settledPerMilestone={settledPerMilestone}
          key={i}
        />
      ))}

      <div className="bg-gray-100 p-2 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-bol">Total </span>
          <span>{amount} CELO</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bol"> System fee </span>
          <span>-5%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold">You&apos;ll receive </span>
          <span>
            {totalPayment && ethers.utils.formatEther(totalPayment)} CELO
          </span>
        </div>
      </div>
    </div>
  );
};
export default Milestones;
