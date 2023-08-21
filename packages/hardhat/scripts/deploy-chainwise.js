const hre = require("hardhat");

async function main() {
  const ChainwiseBadge = await hre.ethers.getContractFactory(
    "ChainwiseVerificationBadge"
  );
  const badge = await ChainwiseBadge.deploy(
    "0xc1eca9bdb6ab14674aed67a1884cc637525cfea1"
  );

  await badge.deployed();

  console.log(
    `ChainwiseVerificationBadge deployed Suceesfully!, ${badge.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
