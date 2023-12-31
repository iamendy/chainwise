import { Back, Check } from "../../../components/icons";
import { useRouter } from "next/router";
import axios from "axios";
import LinkExt from "../../../components/icons/LinkExt";
import getDate from "../../../helpers/formatDate";
import Milestones from "../../../components/influencer/Milestones";
import { useQuery } from "@tanstack/react-query";
import truncate from "../../../helpers/truncate";
import BtnStatus from "../../../components/influencer/BtnStatus";
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

  //get completed milestones count
  const completed = campaign?.milestones?.filter(
    (d: Milestone) => d.status == 2
  );

  return (
    <>
      <div
        onClick={() => router?.back()}
        className="flex mb-4 hover:underline w-fit cursor-pointer"
      >
        <Back />
        back
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <div className="flex items-center justify-between mb-6 relative">
          <div>
            <h3 className="text-lg font-bold">{campaign?.name}</h3>

            {campaign?.status == 0 ? (
              <p className="text-gray-400">
                Creator •{" "}
                <span className="text-black hover:underline cursor-pointer">
                  {truncate(campaign?.userAdd)}
                </span>
              </p>
            ) : (
              <p className="text-gray-400">
                Influencer •{" "}
                <span className="text-black hover:underline cursor-pointer flex items-center gap-x-1">
                  {campaign?.assignedTo.username}{" "}
                  {campaign?.assignedTo.isVerified && <Verified />}
                </span>
              </p>
            )}
          </div>

          {campaign?.status > 0 ? (
            campaign?.status == 1 ? (
              <div className="bg-gray-600 flex items-center gap-x-1 px-3 py-1 text-white">
                <Check /> Completed
              </div>
            ) : (
              <div className="bg-gray-600 flex items-center gap-x-1 px-3 py-1 text-white">
                Ongoing
              </div>
            )
          ) : (
            <BtnStatus campaignId={campaign?.id} />
          )}
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
