import Link from "next/link";
import getDate from "../../helpers/formatDate";
import { Campaign, Milestone } from "../../types";

interface Props {
  campaign: Campaign;
}

const Campaign = ({ campaign }: Props) => {
  const completed = campaign?.milestones?.filter(
    (d: Milestone) => d.status == 2
  );

  return (
    <Link
      href={`/influencer/view-campaign/${campaign?.id}`}
      className="border rounded-lg p-2 relative"
    >
      <div>
        <div>
          <b>{campaign.name}</b> <br />
          <small className="text-gray-400">
            {getDate(campaign?.startDate)} - {getDate(campaign?.endDate)}
          </small>
        </div>

        <p className=" truncate pr-2">{campaign?.description}</p>
        <div className="flex items-center gap-x-2 mt-2">
          <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
            <span>{campaign.amount} MATIC</span>
          </div>

          <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
            <span>
              {completed?.length}/{campaign?.milestones?.length} milestones
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Campaign;
