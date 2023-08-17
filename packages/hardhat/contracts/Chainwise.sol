// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Chainwise{
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
        
        //transfers payment to influencer wallet
        (bool success, ) = payable(campaign.influencer).call{
            value: campaign.amount/campaign.milestoneCount
            }("");
        require(success, "Transfer failed.");

        //update campaign record
        campaigns[campaignId].paymentCount++;
    }

    function getCampaign(string calldata campaignId) view external returns(Campaign memory) {
        return campaigns[campaignId];
    }
    //to be deleted. Used for recovering funds
    function withdraw(address _recipient) public payable {
        payable(_recipient).transfer(address(this).balance);
    }
}