export const connect = {
  abi: [
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
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "isChainwiseInfluencer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
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
  ],
  address: "0x211BB4fD666217BC219EC3f9cA1b14B7E2B3D802",
};

export default connect;
