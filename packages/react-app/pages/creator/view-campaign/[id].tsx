import CreatorLayout from "../../../components/layouts/CreatorLayout";

const ViewCampaign = () => {
  return (
    <CreatorLayout>
      <div className="rounded-xl bg-white p-4 shadow">
        <div className="mb-4">
          <h3 className="text-lg font-bold">ByBit Network</h3>

          <p className="text-gray-400">
            Influencer . <span className="text-black">@frankdegods </span>
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
          <div className="flex items-center justify-between px-2">
            <div>
              <p className="font-semibold"> Milestone 1</p>
              <p className="text-gray-900">Lorem ipsum dolor sit amet.</p>
            </div>
            3 CELO
          </div>

          <div className="flex items-center justify-between px-2">
            <div>
              <p className="font-semibold"> Milestone 2</p>
              <p className="text-gray-900">Lorem ipsum dolor sit amet.</p>
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
    </CreatorLayout>
  );
};
export default ViewCampaign;
