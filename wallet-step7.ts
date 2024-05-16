import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";

async function main() {
  const mnemonic = "hour airport because column asthma flush frequent rough gap dawn pumpkin moon club system undo table agree hidden wide clever blood buddy brisk blame"
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0});

  console.log(wallet.address.toString({ testOnly: true }));

  console.log("workchain:", wallet.address.workChain);

}

main();