import { useQuery } from "@tanstack/react-query";
import { Card } from "../icons";
import axios from "axios";
import { useAccount } from "wagmi";

const Earnings = () => {
  const { address } = useAccount();

  const getEarnings = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-influencer-earnings?address=${address}`
    );

    return data;
  };

  const { data: earnings, isLoading } = useQuery({
    queryFn: getEarnings,
    queryKey: ["earnings", address],
  });

  return (
    <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
      <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
        <Card />
      </div>
      <div>
        <b> {earnings} MATIC</b>
        <p className="text-[14px]"> Delivery Earnings </p>
      </div>
    </div>
  );
};
export default Earnings;
