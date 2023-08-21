export interface Influencer {
  id: string;
  userAddress: string;
  username: string;
  tagline?: string;
  isVerified?: boolean;
  createdAt: string;
}

export default Influencer;
