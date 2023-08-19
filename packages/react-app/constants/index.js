export const connect = {
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "campaignId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "milestoneCount",
          type: "uint256",
        },
      ],
      name: "activateCampaign",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "campaignId",
          type: "string",
        },
        {
          internalType: "address",
          name: "influencer",
          type: "address",
        },
      ],
      name: "matchCampaign",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "campaignId",
          type: "string",
        },
      ],
      name: "payMilestone",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_systemFee",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_badgeAddr",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_recipient",
          type: "address",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "campaignId",
          type: "string",
        },
      ],
      name: "getCampaign",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "address",
              name: "influencer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "milestoneCount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "paymentCount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isCompleted",
              type: "bool",
            },
          ],
          internalType: "struct Chainwise.Campaign",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_influencer",
          type: "address",
        },
      ],
      name: "getInfluencerRating",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "campaignId",
          type: "string",
        },
      ],
      name: "getInfluencerTotalPayment",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getSystemFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "influencers",
      outputs: [
        {
          internalType: "bool",
          name: "isVerified",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "xp",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  address: "0x38F1989368ddcbD9C3517c8665Fca1C7E858e663",
};

export default connect;
