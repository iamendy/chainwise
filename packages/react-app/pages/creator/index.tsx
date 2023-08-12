import CreatorLayout from "../../components/layouts/CreatorLayout";
import { Tasks, Completed, Card, Twitter } from "../../components/icons";
import Link from "next/link";

const Dashboard = () => {
  return (
    <CreatorLayout>
      <div className="flex justify-between items-center">
        <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
          <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
            <Tasks />
          </div>
          <div>
            <b>04</b>
            <p className="text-[14px]">Pending campaigns</p>
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
            <p className="text-[14px]"> Marketing goals </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white p-4 shadow">
        <h3 className=" mb-4">Ongoing Campaigns</h3>

        <div className="lg:grid lg:grid-cols-2 gap-x-3">
          <div className="border rounded-lg p-2">
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
          </div>

          <div className="border rounded-lg p-2">
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
          </div>
        </div>

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

      <div></div>
    </CreatorLayout>
  );
};

export default Dashboard;
