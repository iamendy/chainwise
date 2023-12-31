# Chainwise x Polygon DevX [EMEA] 

Live Demo - [Loom](https://www.loom.com/share/cfcd06012c2d488fb1b97115dcf2b290?sid=5a04c13f-c4d1-47e4-b984-4dd785d33f49) <br />
Live Link - [Chainwise](https://chainwise.vercel.app) <br />
Slides - [Slides](https://chainwise.vercel.app/ChainwiseDappDemo.pdf)

## ✨ Inspiration

The growth of web3 is intricatley tied to influencers and communities. There is currently no platform where startup creators and busineses can get on-demand access to on-chain verifiable influencers and communities that genuinely drive business growth and adoption.

[Chainwise](https://chainwise.vercel.app) is a dApp that takles the web3 influencer/community sourcing problem for web3 creators and businesses.

## 🍰 What Chainwise does

[Chainwise](https://chainwise.vercel.app) allows product creators and business to create campaigns with defined milestones, then select from a pool of verified influencers and communities. Each campaign requires at least a milestone to be fulfilled and is verified by the product creator, before milestone funds are released to the influencer.

[Chainwise](https://chainwise.vercel.app) also helps web3 influencers and communities create an online reputation that is verifiable on the blockchain.

After their first successful campaign delivery, the influencer/community can mint a soulbound NFT which serves as their on-chain verification and unlocks more benefits. The more campaigns delivered, the more their on-chain rating (XP).

![NFT Token](/packages/react-app/public/Badge.png)

## 💻 How we built Chainwise

We created 2 smart contracts in Solidity, [**Chainwise.sol**](https://github.com/iamendy/chainwise/blob/main/packages/hardhat/contracts/Chainwise.sol) and [**ChainwiseVerificationBadge.sol**](https://github.com/iamendy/chainwise/blob/main/packages/hardhat/contracts/ChainwiseVerificationBadge.sol).

- The Chainwise contract handles the escrow, campaign creation and matching, and milestones tracking. This contract is deployed on Polygon - [View on Mumbai](https://mumbai.polygonscan.com/address/0x2eA8d5e7c0e16Be970e75578Bec7Fbe6ae13B97c)

- The ChainwiseVerificationBadge is used for on-chain verification. It is a soulbound NFT contract that can only be minted after an influencer/community has succesfully delivered their first campaign. [View on Mumbai](https://mumbai.polygonscan.com/address/0x47A015E6d0a22FA163eA9c6509F37FEA65146C14)

For the front end, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Prisma`** and **`TailwindCSS`** .

Chainwise is a hybrid dApp built with custom API endpoints for handling the transactional database logic while the core functions are on-chain.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Utilized Bunzz for a seamless deployment process<br />
🍥 Deployed our dApp on the Polygon network which means we will have the best of speed, cost and mobility for our users. <br />
🍥 Had fun, and learnt a whole lot building our first hybrid dApp <br />

## 📈 What's next for Chainwise

We're excited to have built this dApp. To enable more web3 businesses have on-demand access to the best influencers and communities, we plan on:

- Introduce Chainwise token that can be earned as influencers hit certain XP
- Adding an on-chain validation layer for dispute resolution.
- Add a liquidity pool that influencers can easily exchange ChainWise Token for $MATIC

Thank you! I hope you enjoyed our dApp which allows web3 to grow to its full potentials by eliminating fake influencers/communities and allowing both busineeses and verified influencers/community benefit as we build the future of web3.

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org) for quick smart contract deployment, or alternatively hardhat:

1. Deploy `Chainwise` on Polygon by running the necessary Hardhat script

2. Deploy `ChainwiseVerificationBadge` by passing the deployed `Chainwise` address.

\***\* Frontend \*\***

3. Update your deployed `Chainwise` address on the `src/constants/index.ts file.

4. Setup a PostGreSQL instance from [Railway](https://railway.app)

5. Replace the `DATABASE_URL` on the .env file

6. Run `npx prisma migrate dev` to push migrations to the database

7. Run `yarn dev` to start the DApp on your development environment.

8. You can connect your wallet and enjoy a world of limitless possibilities.
