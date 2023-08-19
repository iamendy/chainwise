// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./ChainWiseBadge.sol";

contract ChainWiseAlt is Ownable, Pausable {
    uint public systemFee;                                                //Fee(percentage) by the system requested from the influencer for every succesfull promo
    uint public systemBalance;                                            //Balance accrued from fee charges
    uint public totalCampaigns;                                           //Total number of campaigns in the platform
    uint public totalConfirmedCampaigns;                                  //Total number of resolved/successful executed campaigns in the platform
    uint public totalDisputedCampaigns;                                   //Total number of unresolved campaigns in the platform

    ChainWiseBadge public chainwiseBadge;                                 //Experimental- ChainWiseBadge Contract instance and should be private
    address public chainwiseBadgeAddress;                                 //Experimental- ChainWiseBadge Contract address  and should be private
    
    mapping (uint => Campaign) allCampaigns;                              //Mapping of campaignId to campaign details
    mapping (address => Campaign[]) campaignsOfCreator;                   //Mapping of creator's address to all his/her created campaigns
    mapping (address => mapping(uint => bool)) public  requestedBy;       //Mapping of Influencer's address to campaignId he REQUESTED for (it can return true or false)
    mapping (uint => address) public  ownerOfCampaign;                    //Mapping of compaignID to it's creator/owner address
    mapping (uint => Available) public  isCampaignAvailable;              //Mapping that returns the availabity of a campaign by it's ID
    mapping (uint => Milestone[]) public  milestonesByCompaignID;         //Mapping of campaignId to it's array of milestones
    mapping (address => InfluencerStruct) public InfluencerData;           //Mapping of influencer address to it's Struct properties

    struct Campaign {
        uint campaignId;
        address campaignCreator;
        address campaignInfluencer;
        uint timeStamp;
        uint campaignBudget;
        uint totalMilestone;
        uint amountPerMilestone;
        Status campaignStatus;  
        bool feePaidLock;
    }

    struct InfluencerStruct {
        address influencer;
        uint pointScore;
        bool hasBadge;
        bool isRegistered;
        uint totalPromos;
        uint totalSuccessfullPromos;
        uint totalDisputedPromos;
    }

    struct Milestone {
        uint milestoneIndex;
        bool isExecuted;
        bool isAccepted;
    }

    enum Available { NO, YES }
    enum Status { OPEN, ONGOING, PENDING, DISPUTED, REFUNDED, COMPLETED }

    event Action(uint campaignId, string actionType, Status status, address indexed executor);

    constructor(uint _systemPercentageFee, address _badgeAddr) {
        systemFee = _systemPercentageFee;
        chainwiseBadge = ChainWiseBadge(_badgeAddr);
        chainwiseBadgeAddress = _badgeAddr;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    //This function registers influencer to the platform by adding his address to influncerStruct props
    //-and should be internal func
    function addInfluencer(address _addr) public {
        InfluencerData[_addr].influencer = _addr;
        InfluencerData[_addr].isRegistered = true;
    }

    //This function returns an influencer by his address
    function getInfluencer(address _addr) public view returns (InfluencerStruct memory) {
        return InfluencerData[_addr];
    }

    //This function gets all the campaigns registered on the platform
    //NB: Not economically feasible on large scale
    function getAllCampaigns() public view whenNotPaused returns (Campaign[] memory _allSysCampaigns) {
        uint _totalCampaigns = totalCampaigns;
        _allSysCampaigns = new Campaign[](_totalCampaigns);

        for (uint i = 0;  i < _totalCampaigns; i++) {
            _allSysCampaigns[i] = allCampaigns[i];
        }
    }

    //This function gets a campaign by it's ID
    function getCampaign(uint id) public view returns (Campaign memory) {
        return allCampaigns[id];
    }

    //This function should return all the campaigns of a creator calling it.
    function myCampaigns() public view returns (Campaign[] memory) {
        return campaignsOfCreator[msg.sender];
    }

    //This function should allow the platform owner to withdraw his/her platform charges
    function withDrawal(address to, uint amount) public onlyOwner returns (bool) {
        require(amount <= systemBalance, "Insufficient fund");

        payTo(to, amount);
        systemBalance -= amount;

        return true;
    }

    //This function is should internally to pay to influencers on the platform
    function payTo(address to, uint amount) internal returns (bool) {
        (bool succeeded,) = payable(to).call{value: amount}("");
        require(succeeded, "Payment failed");

        return true;
    }
    
    //Temp:-Should return contract balance
    function contractBalance() public view returns (uint) {
        return address(this).balance;
    }

    /*
    * @requestForCampaign():- should allow platform influencers to request for 
    * available campaigns on the platform.
    *
    * @args <id> :- this is campaign ID the influencer is request for.
    */
    function requestForCampaign(uint id) public returns (bool) {
        require(msg.sender !=  ownerOfCampaign[id], "Owner not allowed");
        require(isCampaignAvailable[id] == Available.YES, "Campaign not available");
        require(InfluencerData[msg.sender].isRegistered, "Not registered");

        requestedBy[msg.sender][id] = true;

        emit Action(id, "CAMPAIGN REQUESTED", Status.OPEN , msg.sender);

        return true; 
    }
    
    /*
    * @createCampaign():- allows creator to create a campaign on the platform.
    *
    * @args <milestoneCount> :- this is the number of milestone associated with 
    * the campaign being created.
    */
    function createCampaign(uint milestoneCount) public whenNotPaused payable returns (bool) {
        require(milestoneCount > 0, "No milestone");
        require(msg.value > 0 ether, "Zero Amount");

        uint id = totalCampaigns++;
        Campaign storage campaign = allCampaigns[id]; 
        campaign.campaignId = id;
        campaign.campaignBudget = msg.value;
        campaign.totalMilestone = milestoneCount;
        campaign.timeStamp = block.timestamp;
        campaign.campaignCreator = msg.sender;
        campaign.feePaidLock = false;
        campaign.amountPerMilestone = (msg.value - ((msg.value * systemFee)/100))/milestoneCount; 
        campaignsOfCreator[msg.sender].push(campaign);
        ownerOfCampaign[id] = msg.sender;
        isCampaignAvailable[id] = Available.YES;

        for (uint i = 0; i < milestoneCount; i++) {
            milestonesByCompaignID[id].push(Milestone(i, false, false));
        }
          
        emit Action(id, "CAMPAIGN CREATED", Status.OPEN , msg.sender);

        return true;
    }

    /*
    * @acceptCampaignRequest():- allows the creator to accept a campaign request by 
    * a particular influencer.
    *
    * @args <id, influnencer> :- <id> is the campaign ID, <influencer> is the address of
    * influencer the creator accepts.
    */
    function acceptCampaignRequest(uint id, address influencer) public whenNotPaused returns (bool) {
        require(msg.sender ==  ownerOfCampaign[id], "Not Owner");
        require(isCampaignAvailable[id] == Available.YES, "Campaign not available"); 
        require(requestedBy[influencer][id], "Influencer not listed");

        Campaign storage _currentCampaign = allCampaigns[id];
        _currentCampaign.campaignInfluencer = influencer;   //assign a campaign to it's accepted influencer
        _currentCampaign.campaignStatus = Status.ONGOING;
        isCampaignAvailable[id] = Available.NO;

        emit Action(id, "CAMPAIGN REQUEST ACCEPTED", Status.ONGOING , msg.sender);

        return true;
    }

    //revisit
    /*
    * @executeMilestone():- this function is performed by the influencer after he/she has successfull
    * done executing the task associated with a milestone. It changes the particular campaign status 
    * from ONGOING to PENDING; & waits for creator's approval.
    *
    * @args <campaignId, milestoneIndex> :- <campaignId> is the campaign ID, <milestoneIndex> is the 
    * index of the milestone being executed. NB: milestoneIndex always starts at 0.
    */
    function executeMilestone(uint campaignId, uint milestoneIndex) public whenNotPaused returns (bool) {
        Campaign storage _campaign = allCampaigns[campaignId];
        Milestone storage _milestone = milestonesByCompaignID[campaignId][milestoneIndex];

        require(msg.sender == _campaign.campaignInfluencer, "Not Influencer");
        require(!_milestone.isExecuted, "Milestone already executed");
        require(!_milestone.isAccepted, "Milestone execution already approved");

        _milestone.isExecuted = true;
        _campaign.campaignStatus = Status.PENDING;

        emit Action(campaignId, "CAMPAIGN MILESTONE EXECUTED", Status.PENDING , msg.sender);

        return true;
    }

    /*
    * @approveMilestone():- this function is performed by the creator to approve the task associated
    * with a milestone submitted by the influencer. It changes the particular campaign status 
    * from ONGOING to PENDING, COMPLETED or DISPUTED depending on the validity of milestone the task.
    *
    * @args <campaignId, milestoneIndex, isExecuted> :- <campaignId> is the campaign ID, <milestoneIndex> 
    * is the index of the milestone being executed. NB: milestoneIndex always starts at 0; <isExecuted> is
    * validity of the milestone the task.
    */
    function approveMilestone(uint campaignId, uint milestoneIndex, bool isExecuted) public whenNotPaused returns (bool) { 
        require(msg.sender ==  ownerOfCampaign[campaignId], "Not Owner");

        Milestone storage currCampaignMilestone = milestonesByCompaignID[campaignId][milestoneIndex];
        require(currCampaignMilestone.isExecuted, "Milestone is not yet executed");

        Campaign storage currentCampaign = allCampaigns[campaignId];
        require(currentCampaign.campaignStatus != Status.REFUNDED, "Already Refunded, create a new campaign instead");

        //Onetime Fee payment :- calculates platform charges from the influencer's total payout for the current campaign promotion
        if (!currentCampaign.feePaidLock) {
            uint fee = (currentCampaign.campaignBudget * systemFee) / 100;
            systemBalance += fee;
            currentCampaign.feePaidLock = true;
        }

        //if executed:- Make payment to the influencer per milestone achieved.
        if (isExecuted) {
            payTo(currentCampaign.campaignInfluencer, currentCampaign.amountPerMilestone);
            currCampaignMilestone.isAccepted = true;

            bool isLastMilestone = (milestoneIndex == (currentCampaign.totalMilestone - 1));
            InfluencerStruct storage _influencer = InfluencerData[currentCampaign.campaignInfluencer];
            
            // if it is influencer's last milestone:- Increase influencer's point score by 5 & mark campaign as completed.
            if (isLastMilestone) {
                _influencer.pointScore += 5;
                _influencer.totalPromos += 1;
                _influencer.totalSuccessfullPromos += 1;
                totalConfirmedCampaigns +=1;
                currentCampaign.campaignStatus = Status.COMPLETED;
                emit Action(campaignId, "CAMPAIGN MILESTONES COMPLETED", Status.COMPLETED , msg.sender);
            } else {  
                currentCampaign.campaignStatus = Status.ONGOING;
                emit Action(campaignId, "CAMPAIGN MILESTONE ACCEPTED", Status.ONGOING , msg.sender);
            }

            // if it is influencer's last milestone and has not received a badge yet.
            if (isLastMilestone && !_influencer.hasBadge) {         
                //Mint soulBound token from our ChainWiseBadge contract to influencer as badge

                //chainwiseBadge.safeMint(_influencer.influencer, "Put token uri");
                // IERC721(chainwiseBadgeAddress).safeMint(_influencer.influencer, "Put token uri");
                //(bool success,) = address(chainwiseBadge).delegatecall(abi.encodeWithSignature("safeMint(address, string)", _influencer.influencer,"Put token uri"));
                //require(success, "Failed to give badge");
                _influencer.hasBadge = true;
                emit Action(campaignId, "YOU ARE VERIFIED", Status.COMPLETED , msg.sender);  //Revisit
            }
        } else {
            //if campaign is not executed:- change campaign status to disputed
            currentCampaign.campaignStatus = Status.DISPUTED;
            emit Action(campaignId, "CAMPAIGN MILESTONE DISPUTED", Status.DISPUTED , msg.sender);
        }

        return true;
    }

    //Only the platform can refund the creator after resolution 
    // function refundCreator(uint id, uint milestoneIndex) public onlyOwner returns(bool) {
    //     require(!milestonesByCompaignID[id][milestoneIndex].isAccepted, "Milestone execution already approved");
    //     // code

    //     emit Action(id, "CAMPAIGN REFUNDED", Status.REFUNDED , msg.sender);

    //     return true;
    // }

}