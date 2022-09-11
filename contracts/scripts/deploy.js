const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
//const { SUBSCRIPTION_ID } = require("../constants");

async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so getRandomNumber here is a factory for instances of our GetRandomNumber contract.
 */
  const contract = await ethers.getContractFactory("Totem");
  // deploy the contract
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  const uboToken = await ethers.getContractFactory("UBOToken");

  const deployedUBOTokenContract = await uboToken.deploy();

  await deployedUBOTokenContract.deployed();

  // print the address of the deployed contract
  console.log("Verify Totem Contract Address:", deployedContract.address);
  console.log("Verify ERC20 Address:", deployedUBOTokenContract.address);

  console.log("Waiting for Etherscan verification.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedContract.address,
    constructorArguments: [],
  });

  await hre.run("verify:verify", {
    address: deployedUBOTokenContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//deployed: 0x4492a7c34fea211Fd790df04197C4Cbf8B0be62f
//npx hardhat compile
//npx hardhat run scripts/deploy.js --network goerli
