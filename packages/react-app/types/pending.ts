import Influencer from "./influencer";

interface Pending {
  id: string;
  campaignId: string;
  influencerAddress: string;
  status: boolean;
  createdAt: string;
  influencer: Influencer | undefined;
}

export default Pending;
