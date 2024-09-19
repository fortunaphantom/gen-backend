import Moralis from "moralis";
import { EvmAddressInput, EvmChain } from "@moralisweb3/common-evm-utils";
import { tNft } from "../types/tNft";

// get owned nfts from moralis api
export const getOwnedNfts = async (address: EvmAddressInput) => {
  const allNFTs: tNft[] = [];

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  for (const chain of chains) {
    try {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });

      response.result.forEach((n) => {
        const nft = {
          contractAddress: n.tokenAddress.lowercase,
          tokenId: n.tokenId.toString(),
          chainId: chain.decimal,
          metadata: n.metadata,
        };

        allNFTs.push(nft);
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  return allNFTs;
};
