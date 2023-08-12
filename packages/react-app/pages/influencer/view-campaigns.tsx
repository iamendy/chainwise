import Link from "next/link";
import InfluencerLayout from "../../components/layouts/InfluencerLayout";
import { Bolt, Twitter } from "../../components/icons";

const ViewCampaigns = () => {
  return (
    <InfluencerLayout>
      <div className="mt-5 rounded-xl bg-white p-4 shadow">
        <h3 className=" mb-4">Latest Campaigns</h3>

        <div className="lg:grid lg:grid-cols-2 gap-x-3">
          <Link
            href="/influencer/view-campaign/1"
            className="border rounded-lg p-2 relative"
          >
            <div className="absolute top-2 right-2">
              <div className="bg-slate-200 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <Bolt />
                <span className="text-sm font-semibold">2</span>
              </div>
            </div>

            <div>
              <div>
                <b>ByBit Network</b> <br />
                <small className="text-gray-400">
                  18 Aug 2023 - 23 Aug 2023
                </small>
              </div>
              <p className="text-gray-400">
                influencer <b className="text-black">@frankdegods</b>
              </p>

              <div className="flex items-center gap-x-2 mt-2">
                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <Twitter />
                  <span>2.1k</span>
                </div>

                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <span>0/2 milestones</span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/influencer/view-campaign/1"
            className="border rounded-lg p-2 relative"
          >
            <div>
              <div>
                <b>ByBit Network</b> <br />
                <small className="text-gray-400">
                  18 Aug 2023 - 23 Aug 2023
                </small>
              </div>
              <p className="text-gray-400">
                influencer <b className="text-black">@frankdegods</b>
              </p>

              <div className="flex items-center gap-x-2 mt-2">
                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <Twitter />
                  <span>2.1k</span>
                </div>

                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <span>0/2 milestones</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* If no campaigns found */}
        <div className="text-center mt-4">
          <p>No Campaigns yet</p>

          <Link
            href="/creator/create-campaign"
            className="bg-black inline-block text-white rounded-md leading-none py-2 px-4 mt-4 hover:bg-black/80"
          >
            Create campaign
          </Link>
        </div>
      </div>
    </InfluencerLayout>
  );
};
export default ViewCampaigns;
