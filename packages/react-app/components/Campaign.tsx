import Link from "next/link";
import { Check } from "./icons";
import getDate from "../helpers/formatDate";
import PendingCount from "./PendingCount";
import { useRouter } from "next/router";
import Verified from "./icons/Verified";
import { Campaign as CampaignType, Milestone } from "../types";

interface Props {
  campaign: CampaignType;
}

const Campaign = ({ campaign }: Props) => {
  const completed: Milestone[] | undefined = campaign?.milestones?.filter(
    (d) => d.status == 2
  );
  const router = useRouter();

  return (
    <Link
      href={`${router?.pathname}/view-campaign/${campaign?.id}`}
      className="border rounded-lg p-2 relative"
    >
      {campaign.status == 0 && <PendingCount campaignId={campaign?.id} />}

      <div>
        <div>
          <span className="flex justify-between items-center">
            <b>{campaign.name}</b>
            {campaign.status == 1 && <Check />}
          </span>{" "}
          <small className="text-gray-400">
            {getDate(campaign?.startDate)} - {getDate(campaign?.endDate)}
          </small>
        </div>

        <p className="text-gray-400 flex items-center gap-x-1">
          influencer •{" "}
          {campaign?.status > 0 ? (
            <b className="text-black text-sm flex items-center gap-x-1">
              @{campaign?.assignedTo?.username}{" "}
              {campaign?.assignedTo?.isVerified && <Verified />}
            </b>
          ) : (
            <b className="text-black text-sm">Not assigned</b>
          )}
        </p>

        <div className="flex items-center gap-x-2 mt-4">
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
