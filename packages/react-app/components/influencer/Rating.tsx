import connect from "../../constants";
import { Star } from "../icons";
import { useAccount, useContractRead } from "wagmi";

const Rating = () => {
  const { address } = useAccount();
  const { data: rating, isLoading } = useContractRead({
    address: connect.address,
    abi: connect.abi,
    functionName: "getInfluencerRating",
    args: [address],
  });

  return (
    <div className="flex items-center gap-x-2">
      <div className="flex">
        <Star big={true} />
        <Star big={true} />
        <Star big={true} />
        <Star big={true} />
      </div>

      <div className="text-sm">XP: {parseInt(rating || 0)}</div>
    </div>
  );
};
export default Rating;
