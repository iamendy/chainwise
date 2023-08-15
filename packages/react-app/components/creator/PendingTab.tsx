import Link from "next/link";
import { Bolt, Twitter } from "../icons";

const PendingTab = ({ campaigns }) => {
  return (
    <>
      {campaigns.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-x-3 min-h-[150px]">
          <Link
            href="/creator/view-campaign/3"
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
                influencer <b className="text-black text-sm">Not assigned</b>
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
