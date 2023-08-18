import Link from "next/link";
import { Bolt, Twitter } from "../icons";
import getDate from "../../helpers/formatDate";
import PendingCount from "./PendingCount";

const Campaign = ({ campaign }) => {
  const completed = campaign?.milestones.filter((d) => d.status == 2);

  return (
    <Link
      href={`/creator/view-campaign/${campaign?.id}`}
      className="border rounded-lg p-2 relative"
    >
      {campaign.status == 0 && <PendingCount campaignId={campaign?.id} />}
      <div>
        <div>
          <b>{campaign.name}</b> <br />
          <small className="text-gray-400">
            {getDate(campaign?.startDate)} - {getDate(campaign?.endDate)}
          </small>
        </div>
        <p className="text-gray-400">
          influencer <b className="text-black text-sm">Not assigned</b>
        </p>

        <div className="flex items-center gap-x-2 mt-2">
          <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
            <span>{campaign.amount} CELO</span>
          </div>

          <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
            <span>
              {completed.length}/{campaign?.milestones?.length} milestones
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Campaign;
