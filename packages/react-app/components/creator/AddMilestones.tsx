import { useContext, useState } from "react";
import { Add, Milestone, Trash } from "../icons";
import CampaignContext from "../../contexts/CampaignContext";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddMilestones = () => {
  const steps = ["Milestone", "Payment"];
  const { campaign, setStep, setMilestoneCount } = useContext(CampaignContext);

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "",
      description: "",
      campaignId: campaign?.id,
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addMilestone = () => {
    if (milestones.length > 2) {
      return;
    }

    //add new milestone to list
    setMilestones([
      ...milestones,
      {
        id: milestones.length + 1,
        title: "",
        description: "",
        campaignId: campaign?.id,
      },
    ]);
  };

  //add new milestone from list
  const removeMilestone = (id: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  //submit to database
  const onSubmit = async () => {
    //remove id field cos of db error
    const reqMilestones = milestones.map((d) => ({
      title: d.title,
      description: d.description,
      campaignId: d.campaignId,
    }));

    await axios
      .post(`/api/campaign/add-milestones`, reqMilestones)

      .then((d) => {
        setMilestoneCount(milestones.length);

        //reset milestone
        setMilestones({
          id: 1,
          title: "",
          description: "",
          campaignId: "",
        });

        //activate payment modal
        setStep(3);
      });
  };

  //when a milestone filed is updated
  const handleUpdate = (e, i: number) => {
    //get milestone
    const milestone = milestones[i];

    //update milestone value
    const updatedVal = { ...milestone, [e.target.id]: e.target.value };

    //add new milestone
    const newMilestones = [...milestones];
    newMilestones[i] = updatedVal;
    setMilestones(newMilestones);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-xl bg-white p-4 shadow"
    >
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
                  <div className="flex items-center justify-between">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <small className="text-red-500">
                      {errors?.[`title${d?.id}`]?.message}
                    </small>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Increase followers"
                    id="title"
                    value={milestones[i]?.title}
                    {...register(`title${d?.id}`, {
                      onChange: (e) => handleUpdate(e, i),
                      required: {
                        value: true,
                        message: `required`,
                      },
                    })}
                  />
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <small className="text-red-500">
                      {errors?.[`description${d?.id}`]?.message}
                    </small>
                  </div>

                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Get followers to 5000"
                    id="description"
                    value={milestones[i]?.description}
                    {...register(`description${d?.id}`, {
                      onChange: (e) => handleUpdate(e, i),
                      required: {
                        value: true,
                        message: `required`,
                      },
                    })}
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
            type="submit"
            className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddMilestones;
