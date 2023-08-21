import { createContext, useState, ReactNode } from "react";

const CampaignContext = createContext(null);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(1);

  const [campaign, setCampaign] = useState({
    id: "",
    name: "",
    websiteUrl: "",
    twitterUrl: "",
    description: "",
    amount: "",
    userAdd: "",
    startDate: "",
    endDate: "",
  });

  const [milestoneCount, setMilestoneCount] = useState(0);

  return (
    <CampaignContext.Provider
      //@ts-ignore
      value={{
        step,
        setStep,
        campaign,
        setCampaign,
        milestoneCount,
        setMilestoneCount,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
}

export default CampaignContext;
