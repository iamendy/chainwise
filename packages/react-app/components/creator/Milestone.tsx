import axios from "axios";
import { Check, RoundCheck } from "../icons";
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

  const updateMilestone = async () => {
    await axios.patch(`/api/campaign/approve-milestone`, {
      milestoneId: milestone?.id,
    });
  };

  const { mutate } = useMutation({
    mutationFn: updateMilestone,
    onSuccess: () => {
      // Invalidate and refetch
      setToggle(false);
      queryClient.invalidateQueries({ queryKey: ["campaigns"] });
    },
  });

  const handleUpdate = (e) => {
    e.stopPropagation();
    mutate();
  };

  return (
    <div
      onClick={() => setToggle(true)}
      className={`${
        milestone.status == 2
          ? "text-gray-500 line-through pointer-events-none"
          : ""
      } relative flex  p-2 rounded-md items-center justify-between px-2`}
    >
      <div>
        <p className="font-semibold"> {milestone?.title}</p>
        <p className="text-gray-900">{milestone?.description}</p>

        <div
          className={`${
            toggle ? "block" : "hidden"
          } absolute top-0 right-0 z-40 h-full bg-gray-50 border rounded-md px-2 py-1`}
        >
          Confirm delivery?
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
        <div>{amountPerMilestone} CELO</div>
        <div className="bg-gray-200 w-8 h-8 cursor-pointer flex hover:bg-gray-300 active:bg-gray-200 items-center justify-center rounded-full overflow-hidden">
          <RoundCheck />
        </div>
      </div>
    </div>
  );
};
export default Milestone;
