import { Request, Response } from "express";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { tNft } from "../types/tNft";

export const getOwnedNfts = async (req: Request, res: Response) => {
  const allNFTs: tNft[] = [];

  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  for (const chain of chains) {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    response.result.forEach((n) => {
      const nft = {
        contractAddress: n.tokenAddress.lowercase,
        tokenId: n.tokenId.toString(),
        chainId: 1,
        metadata: n.metadata,
      };

      allNFTs.push(nft);
    });
  }

  res.json(allNFTs);
};
