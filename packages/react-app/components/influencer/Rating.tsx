import connect from "../../constants";
import { Bolt } from "../icons";
import { useAccount, useContractRead } from "wagmi";

const Rating = () => {
  const { address } = useAccount();
  const { data: rating, isLoading } = useContractRead({
    //@ts-ignore
    address: connect.address,
    abi: connect.abi,
    functionName: "getInfluencerRating",
    args: [address],
  });

  return (
    <div className="flex items-center gap-x-2">
      <div className="text-sm flex items-center font-semibold">
        {/* @ts-ignore */}
        <Bolt /> <span>{parseInt(rating || 0)} XP</span>
      </div>
    </div>
  );
};
export default Rating;
