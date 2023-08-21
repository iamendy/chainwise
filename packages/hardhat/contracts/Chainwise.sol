// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IChainWiseBadge {
    function safeMint(address to) external;

    function burn(uint256 tokenId) external;

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) external;

    function _burn(uint256 tokenId) external;

    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

//TODOS: add events, campaign owner checks
contract Chainwise {
    uint256 systemFee;
    address owner;

    IChainWiseBadge verificationBadge;

    struct Campaign {
        string id;
        address creator;
        address influencer;
        uint256 milestoneCount;
        uint256 paymentCount;
        uint256 amount;
        bool isCompleted;
    }

    struct Influencer {
        bool isVerified;
        bool hasMinted;
        uint256 xp;
    }

    mapping(string => Campaign) campaigns;
    mapping(address => Influencer) public influencers;

    constructor(uint256 _systemFee) {
        systemFee = _systemFee;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner allowed");
        _;
    }

    //this activates the campaign
    function activateCampaign(
        string calldata campaignId,
        uint256 milestoneCount
    ) external payable {
        require(msg.value > 100000000000000000, "Least amount is 0.1 CELO"); 
        //saves the campaign on-chain
        campaigns[campaignId] = Campaign({
            id: campaignId,
            creator: msg.sender,
            influencer: address(0),
            amount: msg.value,
            milestoneCount: milestoneCount,
            paymentCount: 0,
            isCompleted: false
        });
    }

    //matches an influencer to a campaign
    function matchCampaign(string calldata campaignId, address influencer)
        external
    {
        campaigns[campaignId].influencer = influencer;
    }

    //pays each milestone on creator approval
    function payMilestone(string calldata campaignId) external {
        Campaign memory campaign = campaigns[campaignId];

        require(
            campaign.paymentCount < campaign.milestoneCount,
            "Payment already completed"
        );

        uint256 influencerTotalPayment = campaign.amount -
            ((systemFee * campaign.amount) / 100);

        //transfers payment to influencer wallet
        (bool success, ) = payable(campaign.influencer).call{
            value: influencerTotalPayment / campaign.milestoneCount
        }("");
        require(success, "Transfer failed.");

        //checks if it is the last payment
        if (campaign.paymentCount + 1 == campaign.milestoneCount) {
            //handle rating logic
            influencers[campaign.influencer].xp += 20;

            //checks if it is the influencer first job
            if (!influencers[campaign.influencer].isVerified) {
                //mark as verified influencer to allow Mint
                influencers[campaign.influencer].isVerified = true;
            }

            //mark campaign as completed
            campaigns[campaignId].isCompleted = true;
        }

        //update campaign record
        campaigns[campaignId].paymentCount++;
    }

    //for showing influencer campaign payment
    function getInfluencerTotalPayment(string calldata campaignId)
        external
        view
        returns (uint256)
    {
        Campaign memory campaign = campaigns[campaignId];
        return campaign.amount - ((systemFee * campaign.amount) / 100);
    }

    //get influencer rating
    function getInfluencerRating(address _influencer)
        external
        view
        returns (uint256)
    {
        return influencers[_influencer].xp;
    }

    function activateInfluencerVerification(address influencer) external {
        require(
            influencers[influencer].isVerified,
            "You need to complete deliver a campaign first!"
        );
        require(!influencers[influencer].hasMinted, "Already minted!");

        //call verification contract to mint badge
        verificationBadge.safeMint(influencer);
        influencers[influencer].hasMinted = true;
    }

    function getSystemFee() external view returns (uint256) {
        return systemFee;
    }

    function getCampaign(string calldata campaignId)
        external
        view
        returns (Campaign memory)
    {
        return campaigns[campaignId];
    }

    //to be deleted. Used for recovering funds
    function withdraw(address _recipient) public payable {
        payable(_recipient).transfer(address(this).balance);
    }

    function setVerificationBadge(address _badgeAddr) external onlyOwner {
        verificationBadge = IChainWiseBadge(_badgeAddr);
    }
}
