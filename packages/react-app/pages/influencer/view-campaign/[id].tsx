import { Back, Select } from "../../../components/icons";
import { useRouter } from "next/router";
import axios from "axios";
import LinkExt from "../../../components/icons/LinkExt";
import getDate from "../../../helpers/formatDate";
import Milestones from "../../../components/influencer/Milestones";
import { useQuery } from "@tanstack/react-query";
import truncate from "../../../helpers/truncate";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useSession } from "next-auth/react";

const ViewCampaign = () => {
  const router = useRouter();
  const [toggleApply, setToggleApply] = useState(false);
  const { address } = useAccount();
  const { data: session } = useSession();

  //console.log(session?.accessToken);
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
  const completed = campaign?.milestones?.filter((d) => d.status == 2);

  const applyForCampaign = async () => {
    const { data } = await axios.post("/api/campaign/apply-for-campaign", {
      address,
    });

    console.log(data);
  };

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
                Creator .{" "}
                <span className="text-black hover:underline cursor-pointer">
                  {truncate(campaign?.userAdd)}
                </span>
              </p>
            ) : (
              <p className="text-gray-400">
                Influencer .{" "}
                <span className="text-black hover:underline cursor-pointer">
                  @frankdegods{" "}
                </span>
              </p>
            )}
          </div>

          <button
            onClick={() => setToggleApply(!toggleApply)}
            className="flex py-1 px-2 hover:bg-black/80 active:bg-black rounded-sm justify-center items-center bg-black text-white "
          >
            <Select />
            <span>Apply </span>
          </button>

          {toggleApply && (
            <div className="absolute flex flex-col bg-gray-50 top-[100%] right-0 w-[200px] p-2 shadow">
              <span>Apply for this promotion? </span>
              <div className="flex gap-x-2 mt-1 justify-end">
                <button
                  onClick={() => applyForCampaign()}
                  className="bg-black text-white leading-none px-2 py-1 rounded-md text-sm"
                >
                  Yes
                </button>{" "}
                <button
                  onClick={() => setToggleApply(false)}
                  className="border border-black leading-none px-2 py-1 rounded-md text-sm"
                >
                  No
                </button>
              </div>
            </div>
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

        <Milestones
          milestones={campaign?.milestones}
          amount={campaign?.amount}
        />
      </div>
    </>
  );
};
export default ViewCampaign;
