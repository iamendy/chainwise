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
  ],
  address: "0x99C5D88187BC8aBb15874EB3F896530F5EcB87f4",
};

export default connect;
