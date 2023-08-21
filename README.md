# ChainWise Dapp

ChainWise is a decentralized application that connects reputable influencers to
product creators for business scaling, outreach and growth. It makes finding and
managing web3 influencers your new superpower. It also aids web3 influencers to
create online reputation on the platform that is verifiable on the blockchain.

ChainWise application is built on Celo blockchainm, using Ethereum Smart
Contracts written in Solidity.

## CHAINWISE's Mission

Our mission is simple, to empower transparency and synergize product creators
and reputable influencers in web3 community.

## CHAINWISE Demo

We have developed a prototype application on Celo blockchain testnet.

You can view the [Demo](https://chainwise.vercel.app/) here.

```bash
   Please note that this a demo application, so some of the features may not work as expected.
```

## Contract Address

Test (Celo - Alfajores)

-   #### ChainWise.sol:
        0x41469267878F9F0cF668A1bda2daB9CdB3838e26
-   #### ChainWiseVerificationBadge.sol:
        0x62dD845af0614234865E5D2A15B8C133eDC51E1b

## Archecture

It is worthy to note that CHAINWISE uses prisma for database manipulation. The
project is preconfigured to use PostgreSQL for storing some data that does not
require decentralization.

The CHAINWISE Dapp is comprised of two major parts:

-   ### Product Creators
-   ### Web3 Influencers

-   #### Product Creators:
    They are of the core entity in this project. Creators get to simply enlist
    their product/app as campaign on the platform. Once enlisted, it should be
    available for influencers to see and make request.
-   #### Web3 Influencers:
    Upon registration using valid authenticator means, the platform allows
    influencers to be able to choose/request for a product to campaign or
    promote for. Each campaign requires at least a milestone to be fulfilled and
    is verifiable by the product creator before project funds are being released
    to the influencer.

## Additional Feature

We have added a mechanism for scoring and rating influencers based on their
performance. Additionally, influencers get to own a mintable soul bound token as
badge of verified influencer on the platform.

![NFT Token](/react-app/public/Badge.png)
