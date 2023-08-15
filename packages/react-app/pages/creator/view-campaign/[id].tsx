import { Bolt, Select, Star, Twitter } from "../../../components/icons";

import { useRouter } from "next/router";
import axios from "axios";
import Link from "../../../components/icons/Link";
import getDate from "../../../helpers/formatDate";
import Milestones from "../../../components/creator/Milestones";
import { useQuery } from "@tanstack/react-query";

const ViewCampaign = () => {
  const router = useRouter();

  const getCampaign = async () => {
    const { data } = await axios.get(
      `/api/campaign/get-campaign?id=${router?.query?.id}`
    );

    console.log(data);
    return data?.campaign;
  };

  const { data: campaign } = useQuery({
    queryKey: ["campaigns", router],
    queryFn: getCampaign,
  });

  const completed = campaign?.milestones?.filter((d) => d.status == 2);

  return (
    <>
      <h3 className="mb-4 flex items-center gap-x-2">
        {" "}
        <Bolt /> Interested Influencers
      </h3>
      <div className="grid grid-cols-3 gap-x-4 mb-4">
        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div>
            <b className="hover:underline cursor-pointer">@frankdenero</b>

            <p className="text-[14px]">Web3 gaming data analyst</p>

            <div className=" w-fit  flex items-center gap-x-1 leading-none text-[12px] rounded-sm mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="bg-gray-20 w-fit flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                <Twitter />
                <span>2.1k</span>
              </div>

              <div className="bg-slate-200 hover:bg-slate-100 cursor-pointer w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
                <Select />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div>
            <b className="hover:underline cursor-pointer">@frankdenero</b>

            <p className="text-[14px]">Web3 gaming data analyst</p>

            <div className=" w-fit  flex items-center gap-x-1 leading-none text-[12px] rounded-sm mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="bg-gray-20 w-fit flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                <Twitter />
                <span>2.1k</span>
              </div>

              <div className="bg-slate-200 hover:bg-slate-100 cursor-pointer w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
                <Select />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <div className="mb-4">
          <h3 className="text-lg font-bold">{campaign?.name}</h3>

          <p className="text-gray-400">
            Influencer .{" "}
            <span className="text-black hover:underline cursor-pointer">
              @frankdegods{" "}
            </span>
          </p>
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
              <span>website</span> <Link />
            </a>
            <a
              href={campaign?.twitterUrl}
              target="_blank"
              className="bg-gray-300 flex gap-x-1 items-center leading-none py-2 px-4 rounded-xl text-[14px] hover:bg-gray-200"
            >
              <span>twitter</span> <Link />
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
