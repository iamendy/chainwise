# Chainwise with Bunzz X CELO

Live Demo - [Loom](https://www.loom.com/share/954893c940a74b5292a3030785b10446?sid=19619be4-ec23-412a-8788-7d26ca21b150) <br />
Live Link - [Chainwise](https://chainwise.vercel.app) <br />
Slides - [Slides](https://chainwise.vercel.app/ChainwiseDappDemo.pdf)

## ✨ Inspiration

The growth of web3 is intricatley tied to influencers and communities. There is currently no platform where startup creators and busineses can get on-demand access to on-chain verifiable influencers and communities that genuinely drive business growth and adoption.

[Chainwise](https://chainwise.vercel.app) is a dApp that takles the web3 influencer/community sourcing problem for web3 creators and businesses.

## 🍰 What Chainwise does

[Chainwise](https://chainwise.vercel.app) allows product creators and business to create campaigns with defined milestones, then select from a pool of verified influencers and communities. Each campaign requires at least a milestone to be fulfilled and is verified by the product creator before milestone funds are released to the influencer.

[Chainwise](https://chainwise.vercel.app) also helps web3 influencers and communities create an online reputation on the platform that is verifiable on the blockchain.

After their first successful campaign delivery, the influencer/community can mint a soulbound NFT which serves as their on-chain verification and unlocks more benefits. The more campaigns delivered, the more their on-chain rating (XP).

![NFT Token](/packages/react-app/public/Badge.png)

## 💻 How we built Chainwise

We created 2 smart contracts in Solidity, [**Chainwise.sol**](https://github.com/iamendy/chainwise/blob/main/packages/hardhat/contracts/Chainwise.sol) and [**ChainwiseVerificationBadge.sol**](https://github.com/iamendy/chainwise/blob/main/packages/hardhat/contracts/ChainwiseVerificationBadge.sol).

- The Chainwise contract handles the escrow, campaign creation and matching, and milestones tracking. This contract is deployed on CELO via Bunzz - [https://alfajores.celoscan.io/address/0xc1eca9bdb6ab14674aed67a1884cc637525cfea1#code](https://alfajores.celoscan.io/address/0xc1eca9bdb6ab14674aed67a1884cc637525cfea1#code)

- The ChainwiseVerificationBadge is used for on-chain verification. It is a soulbound NFT contract that is only after an influencer/community has succesfully delivered their first campaign. - 0x460cD7D70445BE4d2787cc6CD8fE3399C0d61087

For the front end, We used **`Celo Composer`** to bootstrap our project. Chainwise is built with **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Prisma`** and **`TailwindCSS`** .

Chainwise is a hybrid dApp built with custom API endpoints for handling the transactional database logic while the core functions are on-chain.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Utilized Bunzz for a seamless deployment process<br />
🍥 Deployed our dApp on the CELO network which means we will have the best of speed, cost and mobility for our users. <br />
🍥 Had fun, and learnt a whole lot building our first hybrid dApp <br />

## 📈 What's next for Chainwise

We're excited to have built this dApp. To enable more web3 businesses have on-demand access to the best influencers and communities, we plan on:

- Introduce Chainwise token that can be earned as influencers hit certain XP
- Adding an on-chain validation layer for dispute resolution.
- Add a liquidity pool that influencers can easily exchange ChainWise Token for $CELO

Thank you! I hope you enjoyed our dApp which allows web3 to grow to its full potentials by eliminating fake influencers/communities and allowing both busineeses and verified influencers/community benefit as we build the future of web3.

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Bunzz](https://bunzz.dev) for quick smart contract deployment, or alternatively hardhat:

1. Deploy `Chainwise` on CELO by running the necessary Hardhat script

2. Deploy `ChainwiseVerificationBadge` by passing the deployed `Chainwise` address.

\***\* Frontend \*\***

3. Update your deployed `Chainwise` address on the `src/constants/index.ts file.

4. Setup a PostGreSQL instance from [Railway](https://railway.app)

5. Replace the `DATABASE_URL` on the .env file

6. Run `npx prisma migrate dev` to push migrations to the database

7. Run `yarn dev` to start the DApp on your development environment.

8. You can connect your wallet and enjoy a world of limitless possibilities.
