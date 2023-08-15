import Link from "next/link";
import { Bolt, Twitter } from "../icons";
import Campaign from "./Campaign";

const PendingTab = ({ campaigns }) => {
  return (
    <>
      {campaigns?.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-x-3 min-h-[150px]">
          {campaigns?.map((d, i) => (
            <Campaign key={i} campaign={d} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 min-h-[150px] flex items-center justify-center">
          <p>No Campaigns yet</p>

          <Link
            href="/creator/create-campaign"
            className="bg-black inline-block text-white rounded-md leading-none py-2 px-4 mt-4 hover:bg-black/80"
          >
            Create campaign
          </Link>
        </div>
      )}
    </>
  );
};
export default PendingTab;
