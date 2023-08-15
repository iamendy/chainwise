import Link from "next/link";
import { Twitter } from "../icons";

const OngoingTab = ({ campaigns }) => {
  return (
    <>
      {campaigns?.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-x-3 min-h-[150px]">
          <Link
            href="/creator/view-campaign/5"
            className="border rounded-lg p-2"
          >
            <div>
              <div>
                <b>ByBit Network</b> <br />
                <small className="text-gray-400">
                  18 Aug 2023 - 23 Aug 2023
                </small>
              </div>
              <p className="text-gray-400">
                influencer <b className="text-black text-sm">@frankdegods</b>
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
            href="/creator/view-campaign/5"
            className="border rounded-lg p-2"
          >
            <div>
              <div>
                <b>ByBit Network</b> <br />
                <small className="text-gray-400">
                  18 Aug 2023 - 23 Aug 2023
                </small>
              </div>
              <p className="text-gray-400">
                influencer <b className="text-black text-sm">@jelo4kul</b>
              </p>

              <div className="flex items-center gap-x-2 mt-2">
                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <Twitter />
                  <span>2.1k</span>
                </div>

                <div className="bg-gray-200 w-fit p-2 flex items-center gap-x-1 leading-none text-[12px] rounded-sm">
                  <span>1/2 milestones</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="text-center mt-4 min-h-[150px] flex items-center justify-center">
          <p>No Ongoing Campaign</p>
        </div>
      )}
    </>
  );
};
export default OngoingTab;
