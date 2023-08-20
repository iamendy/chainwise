export const connect = {
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_systemFee",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
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
          internalType: "address",
          name: "influencer",
          type: "address",
        },
      ],
      name: "activateInfluencerVerification",
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
          internalType: "bool",
          name: "hasMinted",
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
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
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
      name: "payMilestone",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_badgeAddr",
          type: "address",
        },
      ],
      name: "setVerificationBadge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
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
  address: "0x8aE12C5AA29A6e5E0bbe70EFBE13Ba163f4eFf29",
};

export default connect;
