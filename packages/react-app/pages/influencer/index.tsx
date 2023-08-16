import Link from "next/link";
import {
  Bolt,
  Card,
  Completed,
  Star,
  Tasks,
  Twitter,
} from "../../components/icons";

const Dashboard = () => {
  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h3>Welcome, 0x323</h3>

        <div className="flex items-center gap-x-2">
          <div className="flex">
            <Star big={true} />
            <Star big={true} />
            <Star big={true} />
            <Star big={true} />
          </div>

          <div className="text-sm">4.2/5 ratings</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Tasks />
          </div>
          <div>
            <b>04</b>
            <p className="text-[14px]">Ongoing campaigns</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Completed />
          </div>
          <div>
            <b>02</b>
            <p className="text-[14px]">Completed campaigns</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Card />
          </div>
          <div>
            <b>5 CELO</b>
            <p className="text-[14px]"> Earned Promotions </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white p-4 shadow">
        <div className="bg-gray-50 border rounded-lg p-2 mb-4 flex gap-x-2">
          <h3 className="bg-gray-600 w-fit text-white rounded-md leading-none p-2 cursor-pointer">
            Ongoing Campaigns
          </h3>

          <h3 className=" w-fit text-black rounded-md leading-none p-2 cursor-pointer hover:bg-gray-600 hover:text-white">
            Completed Campaigns
          </h3>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-x-3">
          <Link
            href="/influencer/view-campaign/5"
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
            href="/influencer/view-campaign/3"
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

        {/* If no campaigns found */}
        <div className="text-center mt-4">
          <p>No active campaigns</p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
