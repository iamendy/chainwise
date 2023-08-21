import Campaign from "./campaign";

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  status: number;
  campaignId: string;
  createdAt: string;
  campaign?: Campaign;
}

export default Milestone;
