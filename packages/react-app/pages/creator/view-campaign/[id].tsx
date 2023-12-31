import { Back, Bolt, Check } from "../../../components/icons";
import axios from "axios";
import LinkExt from "../../../components/icons/LinkExt";
import getDate from "../../../helpers/formatDate";
import Milestones from "../../../components/creator/Milestones";
import { useQuery } from "@tanstack/react-query";
import PendingInfluencers from "../../../components/creator/PendingInfluencers";
import { useRouter } from "next/router";
import Verified from "../../../components/icons/Verified";
import { Milestone } from "../../../types";

const ViewCampaign = () => {
  const router = useRouter();

  const getCampaign = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-campaign?id=${router?.query?.id}`
    );
    return data?.campaign;
  };

  const { data: campaign } = useQuery({
    queryKey: ["campaign", router],
    queryFn: getCampaign,
  });

  const completed = campaign?.milestones?.filter(
    (d: Milestone) => d.status == 2
  );

  return (
    <>
      <div
        onClick={() => router?.back()}
        className="flex cursor-pointer mb-4 hover:underline w-fit"
      >
        <Back />
        back
      </div>

      {campaign?.status == 0 && (
        <>
          <h3 className="mb-4 flex items-center gap-x-2">
            {" "}
            <Bolt /> Interested Influencers
          </h3>
          <PendingInfluencers campaignId={campaign?.id} />
        </>
      )}

      <div className="rounded-xl bg-white p-4 shadow">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">{campaign?.name}</h3>

            <p className="text-gray-400 flex items-center gap-x-1">
              Influencer •{" "}
              {campaign?.status > 0 ? (
                <a
                  href={`https://twitter.com/${campaign?.assignedTo?.username}`}
                  target="_blank"
                  className="text-black hover:underline cursor-pointer flex items-center gap-x-1"
                >
                  @{campaign?.assignedTo?.username}
                  {campaign?.assignedTo.isVerified && <Verified />}
                </a>
              ) : (
                <span className="text-gray-500">not assigned</span>
              )}
            </p>
          </div>
          <div>
            {campaign?.status == 1 ? (
              <div className="bg-gray-600 flex items-center gap-x-1 px-3 py-1 text-white">
                <Check /> Completed
              </div>
            ) : campaign?.status == 2 ? (
              <div className="bg-gray-600 flex items-center gap-x-1 px-3 py-1 text-white">
                Ongoing
              </div>
            ) : null}
          </div>
        </div>

        <p className="mb-4">{campaign?.description}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-300 leading-none py-2 px-4 rounded-xl text-[14px]">
              {completed?.length}/{campaign?.milestones.length} Milestones
            </span>
            <a
              href={campaign?.websiteUrl}
              target="_blank"
              className="bg-gray-300 flex gap-x-1 items-center leading-none py-2 px-4 rounded-xl text-[14px] hover:bg-gray-200"
            >
              <span>website</span> <LinkExt />
            </a>
            <a
              href={campaign?.twitterUrl}
              target="_blank"
              className="bg-gray-300 flex gap-x-1 items-center leading-none py-2 px-4 rounded-xl text-[14px] hover:bg-gray-200"
            >
              <span>twitter</span> <LinkExt />
            </a>
          </div>

          <p className="text-gray-800 text-[14px]">
            {getDate(campaign?.startDate)} - {getDate(campaign?.endDate)}
          </p>
        </div>

        <Milestones campaignid={campaign?.id} amount={campaign?.amount} />
      </div>
    </>
  );
};
export default ViewCampaign;
