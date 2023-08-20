import { Cart } from "../icons";
import { forwardRef, useContext, useState } from "react";
import CampaignContext from "../../contexts/CampaignContext";
import Input from "../Input";
import Text from "../Text";
import { useForm, FormProvider } from "react-hook-form";
import { useAccount } from "wagmi";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  value: string;
  onClick: () => void;
};

const NewCampaign = () => {
  const { campaign, setStep, setCampaign } = useContext(CampaignContext);

  const methods = useForm();

  const { address } = useAccount();

  const onSubmit = methods.handleSubmit(async () => {
    //post to db
    await axios
      .post("/api/campaign/create-campaign", {
        ...campaign,
        userAdd: address,
      })
      .then((d) => {
        //set campaign context
        setCampaign({ ...d?.data?.campaign, amount: "0" });
        //update step
        setStep(2);
      })
      .catch((e) => console.log(e));
  });

  const onUpdate = methods.handleSubmit(async () => {
    //post to db
    await axios
      .patch(`/api/campaign/update-campaign`, {
        ...campaign,
        userAdd: address,
      })
      .then((d) => {
        //set campaign context
        setCampaign({ ...d?.data?.campaign, amount: "0" });
      })
      .then(() => {
        //update step

        setStep(2);
      })
      .catch((e) => console.log(e));
  });

  // eslint-disable-next-line react/display-name
  const StartDatePicker = forwardRef(({ value, onClick }: Props, ref) => (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium" htmlFor="startDate">
          Start Date
        </label>
      </div>

      <input
        required
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Select start date"
        id="startDate"
        value={value}
        onClick={onClick}
        //@ts-ignore
        ref={ref}
        readOnly
      />
    </div>
  ));

  // eslint-disable-next-line react/display-name
  const EndDatePicker = forwardRef(({ value, onClick }: Props, ref) => (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium" htmlFor="endDate">
          End Date
        </label>
      </div>

      <input
        required
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Select end date"
        id="endDate"
        value={value}
        onClick={onClick}
        //@ts-ignore
        ref={ref}
        readOnly
      />
    </div>
  ));

  return (
    <FormProvider {...methods}>
      <form
        className="overflow-hidden rounded-xl bg-white p-4 shadow"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="mb-4 flex items-center rounded-lg py-2">
          <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
            <Cart />
          </div>
          <div className="flex flex-1">
            <p className="text-sm font-medium">Enter campaign details </p>
          </div>
        </div>

        <div>
          <Input id="name" label="Name" placeholder="Enter campaign name" />
        </div>

        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <Input id="websiteUrl" label="Website" placeholder="https://" />

          <Input
            id="twitterUrl"
            label="Twitter"
            placeholder="https://twitter.com/xyz"
          />

          <DatePicker
            selected={campaign?.["startDate"]}
            //@ts-ignore
            customInput={<StartDatePicker />}
            //@ts-ignore
            onChange={(date) =>
              setCampaign((prev: any) => ({
                ...prev,
                startDate: date,
              }))
            }
          />

          <DatePicker
            selected={campaign?.["endDate"]}
            //@ts-ignore
            customInput={<EndDatePicker />}
            //@ts-ignore
            onChange={(date) =>
              setCampaign((prev: any) => ({
                ...prev,
                endDate: date,
              }))
            }
          />

          <Text
            id="description"
            label="Description"
            placeholder="Enter short description"
          />

          {/* Checks if its a fresh campaign or an update */}
          <div className="col-span-2 grid justify-end">
            {campaign.id ? (
              <button
                onClick={onUpdate}
                type="button"
                className="w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={onSubmit}
                type="button"
                className="w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default NewCampaign;
