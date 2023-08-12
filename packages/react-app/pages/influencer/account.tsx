import InfluencerLayout from "../../components/layouts/InfluencerLayout";

const Account = () => {
  return (
    <InfluencerLayout>
      <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="website"
            >
              Handle
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="@chainwise"
              id="website"
            ></input>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-black text-white leading-none px-2 py-2 rounded-md">
            Connect twitter
          </button>
        </div>
      </div>
    </InfluencerLayout>
  );
};
export default Account;
