import { useContext, useState } from "react";
import { Add, Milestone, Trash } from "./icons";
import CampaignContext from "../contexts/CampaignContext";

const AddMilestones = () => {
  const steps = ["Milestone", "Payment"];
  const { campaign, step, setStep } = useContext(CampaignContext);

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "",
      description: "",
    },
  ]);

  const addMilestone = () => {
    if (milestones.length > 2) {
      return;
    }
    setMilestones([
      ...milestones,
      { id: milestones.length + 1, title: "", description: "" },
    ]);
  };

  const removeMilestone = (id: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
      <div className="flex items-center justify-between mb-2">
        <div className=" flex items-center rounded-lg ">
          <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
            <Milestone />
          </div>
          <div className="flex flex-1">
            <p className="text-sm font-medium">Enter Milestone details</p>
          </div>
        </div>

        <div className="cursor-pointer" onClick={() => addMilestone()}>
          <Add />
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-6 ">
        <div className="space-y-2">
          {milestones.map((d, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className=" flex w-[90%] gap-x-4">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Increase followers"
                    id="title"
                  ></input>
                </div>

                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Get followers to 5000"
                    id="description"
                  ></input>
                </div>
              </div>

              <div
                className="w-[10%] flex items-center justify-center "
                onClick={() => removeMilestone(d.id)}
              >
                <Trash />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 flex justify-end mt-8">
          <button
            onClick={() => setStep(1)}
            type="button"
            className="w-fit lg:w-[200px] rounded-md bg-transparent mr-3 border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Previous
          </button>

          <button
            onClick={() => setStep(3)}
            type="button"
            className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddMilestones;
