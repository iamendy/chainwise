import { Cart } from "./icons";
import { useContext } from "react";
import CampaignContext from "../contexts/CampaignContext";
import Input from "./Input";
import Text from "./Text";
import { useForm, FormProvider } from "react-hook-form";

const NewCampaign = () => {
  const { setStep } = useContext(CampaignContext);

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

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
          <Input id="website" label="Website" placeholder="https://" />

          <Input
            id="twitter"
            label="Twitter"
            placeholder="https://twitter.com/xyz"
          />

          <Input id="start" label="Start Date" placeholder="01/12/2023" />

          <Input id="end" label="End Date" placeholder="01/12/2023" />

          <Text
            id="description"
            label="Description"
            placeholder="Enter short description"
          />

          <div className="col-span-2 grid justify-end">
            <button
              onClick={onSubmit}
              type="button"
              className="w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next Step
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default NewCampaign;
