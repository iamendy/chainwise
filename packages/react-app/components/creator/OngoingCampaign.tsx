import { Tasks } from "../icons";

const OngoingCampaign = ({ count }: { count: number }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
      <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
        <Tasks />
      </div>
      <div>
        <b>{`0${count}`}</b>
        <p className="text-[14px]">Ongoing campaigns</p>
      </div>
    </div>
  );
};
export default OngoingCampaign;
