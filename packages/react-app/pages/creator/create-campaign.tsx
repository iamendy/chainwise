import { useContext } from "react";
import CampaignContext from "../../contexts/CampaignContext";
import NewCampaign from "../../components/creator/NewCampaign";
import { ChevronRight } from "../../components/icons";
import AddMilestones from "../../components/creator/AddMilestones";
import MakePayment from "../../components/creator/MakePayment";

const CreateCampaign = () => {
  //@ts-ignore
  const { step } = useContext(CampaignContext);
  const steps = ["Milestone", "Payment"];

  return (
    <div className="">
      {/* breadcrumb */}
      <nav className="mb-8 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="ml-1 inline-flex text-sm font-medium text-gray-900  md:ml-2">
              Campaign
            </span>
          </li>

          <li>
            <div className="flex items-center">
              <ChevronRight />
              <span
                className={`${
                  step > 1 ? "text-gray-900" : "text-gray-300"
                } ml-1 text-sm font-medium md:ml-2`}
              >
                Milestone
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <ChevronRight />
              <span
                className={`${
                  step > 2 ? "text-gray-900" : "text-gray-300"
                } ml-1 text-sm font-medium md:ml-2`}
              >
                Payment
              </span>
            </div>
          </li>
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
