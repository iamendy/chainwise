import { Campaign as CampaignType } from "../types";
import Campaign from "./Campaign";

interface Props {
  campaigns: CampaignType[];
}
const OngoingTab = ({ campaigns }: Props) => {
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
          <p>No Ongoing Campaign</p>
        </div>
      )}
    </>
  );
};
export default OngoingTab;
