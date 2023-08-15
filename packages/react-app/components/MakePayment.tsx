import { useContext, useState } from "react";
import CampaignContext from "../contexts/CampaignContext";
import { Milestone } from "./icons";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../constants/index";
import { ethers } from "ethers";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const MakePayment = () => {
  const { campaign, setCampaign, setMilestoneCount, setStep, milestoneCount } =
    useContext(CampaignContext);
  const [amount, setAmount] = useState("0.2");
  const debouncedAmount = useDebounce<string>(amount, 500);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { config } = usePrepareContractWrite({
    address: connect.address,
    abi: connect.abi,
    functionName: "activateCampaign",
    args: [campaign?.id, milestoneCount],
    value: ethers.utils.parseEther(debouncedAmount || "0"),
  });

  const { write: activateCampaign, data } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(tx) {
      console.log(tx);
      updateCampaignAmount();
    },
  });

  //on-chain
  const onSubmit = () => {
    activateCampaign?.();
  };

  const updateCampaignAmount = async () => {
    await axios
      .post("/api/campaign/add-campaign-amount", {
        campaignId: campaign?.id,
        amount,
      })
      .then((d) => {
        //reset campaign context
        setCampaign({
          id: "",
          name: "",
          websiteUrl: "",
          twitterUrl: "",
          description: "",
          amount: "",
          userAdd: "",
          startDate: "",
          endDate: "",
        });

        //reset milestone
        setMilestoneCount(0);

        //reset modal
        setStep(1);

        router.push("/creator");
      })
      .catch((e) => console.log(e));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-xl bg-white p-4 shadow"
    >
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
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="$CELO"
            id="amount"
            value={amount}
            {...register("amount", {
              onChange: (e) => setAmount(e.target.value),
              required: {
                value: true,
                message: `required`,
              },
            })}
          ></input>
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Make Payment
          </button>
        </div>
      </div>
    </form>
  );
};
export default MakePayment;
