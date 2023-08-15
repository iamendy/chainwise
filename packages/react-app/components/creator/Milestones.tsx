import { Check } from "../icons";
import Milestone from "./Milestone";

const Milestones = ({ milestones, amount }) => {
  const amountPerMilestone = amount / milestones?.length;

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-y-4">
      {milestones?.map((d, i) => (
        <Milestone
          milestone={d}
          amountPerMilestone={amountPerMilestone}
          key={i}
        />
      ))}

      <div className="bg-gray-100 p-2 flex justify-between items-center rounded-lg">
        <span className="font-bold">Total </span>
        <span>{amount} CELO</span>
      </div>
    </div>
  );
};
export default Milestones;
