import { useState, useContext } from "react";
import CampaignContext from "../../contexts/CampaignContext";
import NewCampaign from "../../components/NewCampaign";
import { Milestone, ChevronRight, Add, Trash } from "../../components/icons";
import AddMilestones from "../../components/AddMilestones";
import MakePayment from "../../components/MakePayment";

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

      {/* Forms */}
      {step == 1 ? (
        <NewCampaign />
      ) : step == 2 ? (
        <AddMilestones />
      ) : (
        step == 3 && <MakePayment />
      )}
    </div>
  );
};

export default CreateCampaign;
