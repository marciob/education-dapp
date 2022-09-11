const CryptumSdk = require("cryptum-sdk");
require("dotenv").config({ path: ".env" });

const API_KEY = process.env.API_KEY;
const MNEMONIC = process.env.MNEMONIC;

const sdk = new CryptumSdk({
  environment: "testnet", // 'testnet'
  apiKey: API_KEY,
});

async function fetching(token_address) {
  const wallet = await sdk.wallet.generateWallet({
    protocol: "POLYGON",
    mnemonic: MNEMONIC,
    derivation: { account: 0, address: 0 },
  });

  const { hash } = await sdk.nft.getMetadata({
    protocol: "POLYGON",
    tokenAddress: token_address,
    tokenId: "1",
  });

  console.log(hash);
}

fetching("0xe73f8e7f031cbf001f1fe62c9a3e9c230d490154");

//deployed examples:
//deployed-txn-address:0xd4ca99365063e59307b02d0a47a18d86a731a9706c9c2d9258b4da07458b7583
//contract-address:0xe73f8e7f031cbf001f1fe62c9a3e9c230d490154
//deployer-address:0x6d956f9200722ab8e31ef9663fa61e6b3ed527dc
