import { useState, useContext } from "react";
import CampaignContext from "../../contexts/CampaignContext";
import NewCampaign from "../../components/NewCampaign";
import { Milestone, ChevronRight, Add, Trash } from "../../components/icons";
import AddMilestones from "../../components/AddMilestones";

const CreateCampaign = () => {
  //@ts-ignore
  const { step, setStep, milestoneCount } = useContext(CampaignContext);
  const steps = ["Milestone", "Payment"];

  return (
    <div className="">
      {/* breadcrumb */}
      <nav className="mb-8 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="ml-1 inline-flex text-sm font-medium text-gray-900 hover:underline md:ml-2"
            >
              Campaign
            </a>
          </li>
          {steps.map((step) => (
            <li key={step}>
              <div className="flex items-center">
                <ChevronRight />
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-300 hover:underline md:ml-2"
                >
                  {step}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}

      {step == 1 ? (
        <NewCampaign />
      ) : step == 2 ? (
        <AddMilestones />
      ) : (
        step == 3 && (
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
            <div className="mb-4 flex items-center rounded-lg py-2">
              <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                <Milestone />
              </div>
              <div className="flex flex-1">
                <p className="text-sm font-medium">Make Payment</p>
              </div>
            </div>

            <div className="mt-6 gap-6 space-y-8">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="firstName"
                >
                  Amount
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="$CELO"
                  id="firstName"
                ></input>
              </div>

              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => setStep(3)}
                  type="button"
                  className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Make Payment
                </button>
              </div>
            </div>
            <div>{milestoneCount}</div>
          </div>
        )
      )}
    </div>
  );
};

export default CreateCampaign;
