import CreatorLayout from "../../components/layouts/CreatorLayout";
import { Tasks, Completed, Card } from "../../components/icons";

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
            <p className="text-[14px]"> Goals achieved </p>
          </div>
        </div>
      </div>
    </CreatorLayout>
  );
};

export default Dashboard;
