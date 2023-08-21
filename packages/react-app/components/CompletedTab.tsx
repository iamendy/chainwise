import Campaign from "./Campaign";
import { Campaign as CampaignsType } from "../types";

interface Props {
  campaigns: CampaignsType[];
}

const CompletedTab = ({ campaigns }: Props) => {
  return (
    <>
      {campaigns?.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-3 min-h-[150px]">
          {campaigns?.map((d, i) => (
            <Campaign key={i} campaign={d} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 min-h-[150px] flex items-center justify-center">
          <p>No completed Campaign</p>
        </div>
      )}
    </>
  );
};
export default CompletedTab;
