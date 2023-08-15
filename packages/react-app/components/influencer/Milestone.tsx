import axios from "axios";
import { Check, RoundCheck } from "../icons";
import { useState } from "react";

const Milestone = ({ milestone, amountPerMilestone }) => {
  const [toggle, setToggle] = useState(false);
  const decline = (e) => {
    e.stopPropagation();
    setToggle(false);
  };

  const updateMilestone = async () => {
    axios
      .patch(`/api/campaign/mark-milestone`, { milestoneId: milestone?.id })
      .then((d) => {
        console.log(d);
        setToggle(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div
      onClick={() => setToggle(true)}
      className="relative flex  p-2 rounded-md items-center justify-between px-2"
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
            onClick={updateMilestone}
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
