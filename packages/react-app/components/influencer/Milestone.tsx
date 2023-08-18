import axios from "axios";
import { RoundCheck, Check } from "../icons";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Milestone = ({ milestone, amountPerMilestone }) => {
  const [toggle, setToggle] = useState(false);
  const queryClient = useQueryClient();

  //decline approve
  const decline = (e) => {
    e.stopPropagation();
    setToggle(false);
  };

  const markMilestone = async () => {
    const { data } = await axios.patch(`/api/campaign/mark-milestone`, {
      milestoneId: milestone?.id,
    });

    console.log(data);
    return data;
  };

  const { mutate } = useMutation({
    mutationFn: markMilestone,
    onSuccess: () => {
      // Invalidate and refetch
      setToggle(false);
      queryClient.invalidateQueries({ queryKey: ["milestones"] });
    },
  });

  const handleUpdate = (e) => {
    e.stopPropagation();
    mutate();
  };

  const handleToggle = () => {
    //prevent clicking when campaign is not assigned
    if (milestone?.campaign?.status > 0) {
      setToggle(true);
    }
  };

  return (
    <div
      onClick={() => handleToggle()}
      className={`${
        milestone.status == 2
          ? "text-gray-500 line-through pointer-events-none"
          : milestone.status == 1
          ? "text-gray-500 pointer-events-none"
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
          Mark as done?
          <br />
          <button
            onClick={(e) => handleUpdate(e)}
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
          {Math.round((amountPerMilestone + Number.EPSILON) * 100) / 100} CELO
        </div>
        {milestone?.campaign?.status == 2 && (
          <div className="bg-gray-200 w-8 h-8 cursor-pointer flex hover:bg-gray-300 active:bg-gray-200 items-center justify-center rounded-full overflow-hidden">
            <RoundCheck />
          </div>
        )}
      </div>
    </div>
  );
};
export default Milestone;
