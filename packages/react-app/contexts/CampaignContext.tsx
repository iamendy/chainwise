import { createContext, useState, ReactNode } from "react";

const CampaignContext = createContext({ step: 1 });

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(1);

  const [campaign, setCampaign] = useState({
    name: "",
    websiteUrl: "",
    twitterUrl: "",
    description: "",
    amount: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const [milestones, setMilestones] = useState([
    {
      title: "",
      description: "",
      campaignId: "",
    },
  ]);

  return (
    <CampaignContext.Provider value={{ step: 1 }}>
      {children}
    </CampaignContext.Provider>
  );
}

export default CampaignContext;
