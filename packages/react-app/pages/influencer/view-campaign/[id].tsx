import {
  Bolt,
  Card,
  Check,
  Completed,
  Select,
  Star,
  Tasks,
  Twitter,
} from "../../../components/icons";
import CreatorLayout from "../../../components/layouts/CreatorLayout";

const ViewCampaign = () => {
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
          <h3 className="text-lg font-bold">ByBit Network</h3>

          <p className="text-gray-400">
            Influencer .{" "}
            <span className="text-black hover:underline cursor-pointer">
              @frankdegods{" "}
            </span>
          </p>
        </div>

        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          exercitationem corporis incidunt blanditiis dignissimos voluptatum.
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-300 leading-none py-2 px-4 rounded-xl text-[14px]">
              1/3 Milestones
            </span>
            <span className="bg-gray-300 leading-none py-2 px-4 rounded-xl text-[14px]">
              website
            </span>
            <span className="bg-gray-300 leading-none py-2 px-4 rounded-xl text-[14px]">
              @twitter
            </span>
          </div>

          <p className="text-gray-800 text-[14px]">12 Aug - 24th Dec 2023</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-y-4">
          <div className="flex items-center justify-between px-2 text-gray-400">
            <div>
              <p className="font-semibold flex items-center gap-x-2">
                {" "}
                Milestone 1 <Check />{" "}
              </p>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
            3 CELO
          </div>

          <div className="flex items-center justify-between px-2">
            <div>
              <p className="font-semibold"> Milestone 2</p>
              <p className="text-gray-900">Lorem ipsum dolor sit amet.</p>

              <div className="bg-gray-50 border rounded-md px-2 py-1">
                Mark this as done?
                <br />
                <button className="bg-black text-white leading-none px-2 py-1 rounded-md text-sm">
                  Yes
                </button>{" "}
                <button className="border border-black leading-none px-2 py-1 rounded-md text-sm">
                  No
                </button>
              </div>
            </div>
            3 CELO
          </div>

          <div className="flex items-center justify-between px-2">
            <div>
              <p className="font-semibold"> Milestone 3</p>
              <p className="text-gray-900">Lorem ipsum dolor sit amet.</p>
            </div>
            3 CELO
          </div>

          <div className="bg-gray-100 p-2 flex justify-between items-center rounded-lg">
            <span className="font-bold">Total </span>
            <span>12 CELO</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewCampaign;
