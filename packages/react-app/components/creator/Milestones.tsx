import { useEffect, useState } from "react";
import Milestone from "./Milestone";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Milestone as MilestoneType } from "../../types";

interface Props {
  campaignid: string;
  amount: number;
}

const Milestones = ({ campaignid, amount }: Props) => {
  const [amountPerMilestone, setAmountPerMilestone] = useState(0);

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

  //watch n calculate.
  useEffect(() => {
    setAmountPerMilestone(amount / milestones?.length);
  }, [milestones]);

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-y-4">
      {milestones?.map((d: MilestoneType, i: number) => (
        <Milestone
          milestone={d}
          amountPerMilestone={amountPerMilestone}
          key={i}
        />
      ))}

      <div className="bg-gray-100 p-2 flex justify-between items-center rounded-lg">
        <span className="font-bold">Total </span>
        <span>{amount} MATIC</span>
      </div>
    </div>
  );
};
export default Milestones;
