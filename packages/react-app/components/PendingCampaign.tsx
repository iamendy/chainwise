import { Pending } from "./icons";

const PendingCampaign = ({ count }: { count: number }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow flex gap-x-2 items-center">
      <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full">
        <Pending />
      </div>
      <div>
        <b>{`0${count}`}</b>
        <p className="text-[14px]">Pending campaigns</p>
      </div>
    </div>
  );
};
export default PendingCampaign;
