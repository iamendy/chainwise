// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Chainwise{

    uint systemFee;
    address verificationBadge;

    struct Campaign{
        string id;
        address creator;
        address influencer;
        uint milestoneCount;
        uint paymentCount;
        uint amount;
        bool isCompleted;
    }

    mapping(string => Campaign) campaigns;
    mapping(address => bool) public isChainwiseInfluencer;

    //todo: add events
    constructor(uint _systemFee, address _badgeAddr) {
        systemFee = _systemFee;
        verificationBadge = _badgeAddr;
    }

    //this activates the campaign
    function activateCampaign(string calldata campaignId, uint milestoneCount) external payable {
        require(msg.value > 100000000000000000, "Least amount is 1 CELO"); //0.1ether
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
    function matchCampaign(string calldata campaignId, address influencer) external {
        campaigns[campaignId].influencer = influencer;
    }

    //pays each milestone on creator approval
    function payMilestone(string calldata campaignId) external {
        
        Campaign memory campaign = campaigns[campaignId];

        require(campaign.paymentCount < campaign.milestoneCount, "Payment already completed");
        
        uint influencerTotalPayment = campaign.amount - ((systemFee * campaign.amount) / 100);
        
        //transfers payment to influencer wallet
        (bool success, ) = payable(campaign.influencer).call{
            value: influencerTotalPayment/campaign.milestoneCount
            }("");
        require(success, "Transfer failed.");

        //checks if it is the last payment
        if(campaign.paymentCount + 1 == campaign.milestoneCount){
            
            //handle rating logic

            //checks if it is the influencer first job
            if(!isChainwiseInfluencer[campaign.influencer]){
                //handle soulbound mint token

                //mark as verified influencer
                isChainwiseInfluencer[campaign.influencer] = true;
            }

            //mark campaign as completed
            campaigns[campaignId].isCompleted = true;
        }

        //update campaign record
        campaigns[campaignId].paymentCount++;
    }

    //for showing influencer 
    function getInfluencerTotalPayment(string calldata campaignId) external view returns (uint) {
        Campaign memory campaign = campaigns[campaignId];
        return campaign.amount - ((systemFee * campaign.amount) / 100);
    }

    function getCampaign(string calldata campaignId) view external returns(Campaign memory) {
        return campaigns[campaignId];
    }

    //to be deleted. Used for recovering funds
    function withdraw(address _recipient) public payable {
        payable(_recipient).transfer(address(this).balance);
    }
}