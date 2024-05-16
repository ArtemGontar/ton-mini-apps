import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "@ton/crypto";
import { fromNano, TonClient, WalletContractV4 } from "@ton/ton";

async function main() {
  const mnemonic = "hour airport because column asthma flush frequent rough gap dawn pumpkin moon club system undo table agree hidden wide clever blood buddy brisk blame"
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0});

  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  // query balance from chain
  const balance = await client.getBalance(wallet.address);
  console.log("balance:", fromNano(balance));

  // query seqno from chain
  const walletContract = client.open(wallet);
  const seqno = await walletContract.getSeqno();
  console.log("seqno:", seqno);
}

main();