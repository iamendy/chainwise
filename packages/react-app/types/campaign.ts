import Milestone from "./milestone";
import Influencer from "./influencer";

export interface Campaign {
  id: string;
  name: string;
  websiteUrl: string;
  twitterUrl: string;
  amount: string;
  status: number;
  userAdd: string;
  influencerAddress: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  milestones?: Milestone[] | undefined;
  assignedTo?: Influencer | undefined;
}

export default Campaign;
