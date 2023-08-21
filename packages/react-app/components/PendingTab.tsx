import Link from "next/link";
import Campaign from "./Campaign";
import { Campaign as CampaignType } from "../types";

interface Props {
  campaigns: CampaignType[];
}

const PendingTab = ({ campaigns }: Props) => {
  return (
    <>
      {campaigns?.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-3 min-h-[150px]">
          {campaigns?.map((d, i) => (
            <Campaign key={i} campaign={d} />
          ))}
        </div>
      ) : (
        <div className="text-center  min-h-[150px] flex flex-col  items-center justify-center">
          <p className="mb-2">No Pending Campaigns</p>
          <Link
            href="/creator/create-campaign"
            className="bg-black inline-block text-white rounded-md leading-none py-2 px-4  hover:bg-black/80"
          >
            Create campaign
          </Link>
        </div>
      )}
    </>
  );
};
export default PendingTab;
